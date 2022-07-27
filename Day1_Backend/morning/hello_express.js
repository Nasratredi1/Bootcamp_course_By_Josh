var express = require('express')  // looks up expressed from your node modules directory and then just loads it into your file under the variable called express.
var app = express()

app.get('/', function (req, res) {
    res.send('Hello, World!')
})

app.get('./hello', function (req, res){
    console.log('hello');
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});