## Microsoft Student Partner, team "var Bot"
### Bot Service 만드는 과정

0. 한국어를 사용하는 자연어처리 챗봇을 만들기 위해서 bot을 만들 때 Language Understanding이 아닌 그냥 basic model을 선택해야 합니다. 추측으로는 Language Understanding model 자체가 영어로 설정되어 있기 때문에 언어 상의 충돌이 발생하기 때문인 것 같습니다.
1. 봇을 simulate 해보기 위해서는 nodejs 설치가 필요합니다.
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