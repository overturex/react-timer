var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function(){
   console.log('running at: ' + PORT);
});