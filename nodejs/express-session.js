var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var FileStore = require('session-file-store')(session);

var app = express()
//app.use는 사용자가 요청이 있을 때 마다 이 코드를 실행하도록 하는 것

app.use(session({
  secret: 'slidjf23$#@ilwejr',
  resave: false,
  saveUninitialized: true, //세션이 필요하기 전까지 세션을 실행하지 않는다
  store:new FileStore()
}))


app.get('/', function (req, res, next) {
  console.log(req.session);
  if(req.session.num === undefined){
    req.session.num = 1;
  } else {
    req.session.num = req.session.num + 1;
  }
  res.send(`Views : ${req.session.num}`);
})

app.listen(3000,function(){
  console.log('3000!');
});
