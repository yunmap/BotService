/* global process */
//require('dotenv-extended').load();

/*-----------------------------------------------------------------------------
A simple echo bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    stateEndpoint: process.env.BotStateEndpoint,
    openIdMetadata: process.env.BotOpenIdMetadata,
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

// Create your bot with a function to receive messages from the user
var bot = new builder.UniversalBot(connector, function (session) {
    session.send('Sorry, I did not understand \'%s\'. Type \'help\' if you need assistance.', session.message.text);
});


var LUIS_MODEL_URL = "https://southeastasia.api.cognitive.microsoft.com/luis/v2.0/apps/447d186e-a163-4533-b714-6c2f5d238e0b?subscription-key=8edd5782d4cf4ad39cf1c0fd576c5ff0&verbose=true&timezoneOffset=0&q=";
var recognizer = new builder.LuisRecognizer(LUIS_MODEL_URL);
bot.recognizer(recognizer);

var luisPrompt = new builder.Prompt({defaultRetryPrompt:"I'm sorry. I didn't recognize your speech."})
.onRecognize(function(context,callback){
    recognizer.recognize(context,function(err,result){
        if(result&&result.intent!=='None'){
            callback(null,result.score,result);
        }else{
            callback(null,0,0);
        }
    });
});
bot.dialog('LuisPrompt',luisPrompt);

builder.Prompts.LuisPrompt = function(session, prompt, options){
    var args = options||{};
    args.prompt = prompt||options.prompt;
    session.beginDialog('LuisPrompt',args);
};

bot.dialog('Help', function (session) {
    session.endDialog("피자 주문을 도와드리겠습니다! 어떤 피자를 원하세요? \"치즈 피자 주문하겠습니다\"라고 말씀해주세요.");
}).triggerAction({
    matches: 'Help'
});


bot.dialog('OrderPizza', [
    function (session, args, next) {
        var pizzaTypeEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'PizzaType');
        if (!pizzaTypeEntity) {
            builder.Prompts.text(session, '피자 종류를 말씀해주세요.');
            return;
        }
        
        session.dialogData.pizzaType = pizzaTypeEntity.entity;

        builder.Prompts.LuisPrompt(session,pizzaTypeEntity.entity+"를 주문합니다. 배달은 어디로 해드릴까요?");
        //session.beginDialog('SetDestination');
    },
    function (session,results) {
        //console.log("results : " + JSON.stringify(results));
        var roadNameEntity = builder.EntityRecognizer.findEntity(results.response.entities, 'roadName');
        var roadNumEntity = builder.EntityRecognizer.findEntity(results.response.entities, 'roadNum');
        var detailAddressEntity = builder.EntityRecognizer.findEntity(results.response.entities, 'detailAddress');
        session.dialogData.roadName = roadNameEntity.entity;
        session.dialogData.roadNum = roadNumEntity.entity;
        session.dialogData.detailAddress = detailAddressEntity.entity;
        builder.Prompts.LuisPrompt(session,roadNameEntity.entity+"길"+ roadNumEntity.entity+" "+detailAddressEntity.entity+"로 배달 해 드리겠습니다. 결제는 어떻게 하시겠어요?");
    },
     function (session,results) {
        var paymentEntity = builder.EntityRecognizer.findEntity(results.response.entities, 'payment');
        session.dialogData.payment = paymentEntity.entity;
        session.endDialog(paymentEntity.entity+"결제를 선택하셨습니다. 주문 해 주셔서 감사합니다.");
    }
]).triggerAction({
    matches: 'OrderPizza',
    onInterrupted: function (session) {
        session.send('피자 종류를 선택해주세요.');
    }
});