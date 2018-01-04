# 피자 주문 봇

Bot Framework와 LUIS를 이용하여 피자 주문을 도와주는 봇입니다. 


## 개발환경 설치

npm을 이용하여 설정합니다.

```
npm install
```


## 설정 수정

`.env` 파일의 microsoft app id, password를 자신의 것으로 수정합니다.
또한, `app.js`의 LUIS_MODEL_URL을 새로 생성한 LUIS의 model url로 수정합니다.

Shell에서 환경 변수를 activate합니다.

```
source .env
```


## 시작

Node application을 실행합니다.

```
npm start
```
