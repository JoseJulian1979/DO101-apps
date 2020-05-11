var express = require('express');
app = express();

var response;
app.get('/', function (req, res) {
  response = 'This is version 3 of the app a ver si funciona.' + '\n';
  res.send(response);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

