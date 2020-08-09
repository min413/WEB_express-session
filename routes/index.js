var template = require('../lib/template.js');
var express = require('express');
var router = express.Router();
var auth = require('../lib/auth.js');

//사용자가 전송한 post 데이터를 내부적으로 분석해서
//모든 데이터를 가져온 다음에 create_process저 경로에해당되는 callback을
//호출하도록 약속되어 있음
//여기서 callback의 첫번째 인자에서 request.body로 동작함

//app.get('/', (req, res) => res.send('Hello World!'))


//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
router.get('/', function(request, response) {

  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `
    <h2>${title}</h2>${description}
    <img src="/images/cat.jpg" style="width:300px; display:block; margin-top:10px;">
    `,
    `<a href="/topic/create">create</a>`,
    auth.statusUI(request, response)
  );
  response.send(html);
});
module.exports = router;
