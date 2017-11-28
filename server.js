var express = require('express');
var app = express();

const path = require('path');
const OutPutPath = path.join(__dirname, './public/');
app.use(express.static(OutPutPath));

app.listen(process.env.PORT || 8080);