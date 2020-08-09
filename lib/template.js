module.exports = {
  HTML:function(title, list, body, control,
    authStatusUI='<a href="/auth/login">login</a>'){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>

      ${authStatusUI}
      <h1 style="text-align:center; font-size:30px " ><a href="/">WEB Practice</a></h1>
      <hr class="two">

      <div style="float: left; width: 20%; padding:10px;">

      ${list}
      ${control}
      </div>
      <div style="float: left; width: 70%; padding:10px; border-left:thin solid #808080;">
      ${body}
      </div>
    </body>
    </html>
    `;
  },list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/topic/${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}
