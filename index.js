const express = require('express')
const app = express()
const path = require('path');
const port = 3000



app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/src/index.html'));
  });
app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "/public/style.css");
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('...');