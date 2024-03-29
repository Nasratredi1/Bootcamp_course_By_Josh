var express = require('express')  // looks up expressed from your node modules directory and then just loads it into your file under the variable called express.
var app = express()

app.get('/', function (req, res) {
    res.send('Hello, World!')
})


app.get('/hello', function (req, res) {
    console.log('hello');
    res.send('hello');
});

app.get('/coin', function(req, res) {
    var randomNumber = Math.random();
    if (randomNumber > .5) {
        var coin = 'Heads';
    } else {
        var coin = 'Tails';
    }

    res.send(coin);
});

app.get('/getcoinstate', function(req, res) {
    if (coinState) {
        res.send('Heads');
    } else {
        res.send('Tails');
    }
});

app.get('./getcoinstate/:hello/:asdf', function (req,res){
    res.send(req.params.hello + ' ' +req.params.asdf);
})
// app.get('/flipcoin', function(req, res) {
//     coinState = !!Math.round(Math.random())
//     res.send();
// });

app.get('/flipcoin', function(req, res) {
    var didError = !!Math.round(Math.random())
    if (didError) {
        res.status(404).send("Sorry. It didn't work");
    //    return res.status(404).send("Sorry. It didn't work");// you can retrun it
    }
    coinState = !!Math.round(Math.random());
    res.send();
    //res.status(200).send();// or you car write like this
     //res.sendStatus(200);// you can shortly like this 

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});