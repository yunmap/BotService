## Microsoft Student Partner, team "var Bot"

### 안녕하세요. 에반젤리즘 팀 var Bot 입니다.
저희는 6명의 개발자로 구성되어 있습니다.
- 김동섭 (https://github.com/eastskim48)
- 김홍민 (https://github.com/hongman)
- 도지윤 (https://github.com/yunmap)
- 이민정 (https://github.com/s7mile)
- 정주홍 (https://github.com/toughrogrammer)
- 황나윤 (https://github.com/matilda38)


### Bot Service 만드는 과정

0. 한국어를 사용하는 자연어처리 챗봇을 만들기 위해서 bot을 만들 때 Language Understanding이 아닌 그냥 **basic model을 선택해야 합니다**. 추측으로는 Language Understanding model 자체가 영어로 설정되어 있기 때문에 언어 상의 충돌이 발생하기 때문인 것 같습니다.
1. 봇을 local에서 simulate 해보기 위해서는 nodejs 설치가 필요합니다.
2. 봇을 만들 로컬 폴더에서 cmd를 실행하여 npm init 명령어를 실행합니다.
3. 로컬 폴더의 cmd에서 필요한 package들을 설치합니다. (botbuilder, restify, request, dotenv-extended)
	*** 부분에 botbuilder, restify, request, dotenv-extended를 각각 실행하면 됩니다.
```
npm install --save ***
```
4. LUIS publish key를 등록합니다. (luis.ai에서 진행합니다.)
5. node app.js를 로컬 폴더의 cmd에서 실행합니다.
6. Bot emulator를 이용하여 local에서 test합니다.
	(5번 절차를 먼저 진행해야 Bot emulator와 연결됩니다.)
7. 만약 online code editor를 이용중이면 online shell에 3번 과정을 반드시 실행해야 합니다.
	(저는 실행을 했어야 했는데 더러 미리 설치되어 있는 경우도 있습니다. 오류가 난다면 Online shell에도 설치해주세요.)
8. 그리고, online code editor에서는 AppID와 PW를 등록해야 합니다.
9. 단, local 폴더를 이용하여 진행한다면 별도의 등록 과정이 필요하지 않습니다.
봇을 생성하는 과정은 https://github.com/angie4u/BotFramework 에 그림과 함께 더 자세히 설명되어 있습니다.
10. 또한, [var Bot 김동섭 MSP의 블로그](https://eastskim.blogspot.kr/2017/12/pizzachicken.html?m=1)를 참고하셔도 좋습니다.

### 레포지토리 이용법

발표자료 폴더에 1차 세미나와 2차 세미나 때 사용했던 발표자료를 pdf로 올려놓았습니다.
1차 세미나는 개론 위주(챗봇이 어떻게 사용되는지, 종류, 만드는 과정)로 진행되었고, 2차 세미나는 LUIS를 사용하여 피자를 주문하는 챗봇을 모든 참가자 분들이 만들어보는 방식으로 진행되었습니다.
- 1차 세미나
> 1. Bot 어떻게 적용할까? (실제 예시를 바탕으로)
> 2. Bot Service와 Bot Framework (쉽게 만드는 bot)
> 3. Bot Framework with Azure. (Bot Framework는 Azure 환경에서 어떻게 실행되는가)
> 4. LUIS를 썼더니 우리 카톡봇이 달라졌어요! (Bot Framework + @)
- 2차 세미나
> 1. 실습 안내자료
실습코드 폴더에 2차 세미나의 완성 코드를 첨부하였습니다.
이 코드를 참고하시면 LUIS를 사용하는 모든 챗봇을 만들 수 있습니다.
> 2. 안내 자료와 함께 코드를 보시는 것을 권장합니다.



### 현장 사진

1차세미나

![1차세미나](https://github.com/yunmap/BotService/blob/master/album/image4.jpg)
![1차세미나](https://github.com/yunmap/BotService/blob/master/album/image5.jpg)
![1차세미나](https://github.com/yunmap/BotService/blob/master/album/image3.jpg)

2차세미나

![2차세미나](https://github.com/yunmap/BotService/blob/master/album/image2.jpg)
Microsoft 배민수 님의 Introduction으로 시작한 2차 세미나!
![2차세미나](https://github.com/yunmap/BotService/blob/master/album/image1.jpg)
