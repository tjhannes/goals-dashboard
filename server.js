// Require express and create an instance of it
var express = require('express');
var app = express();

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>Goals Dashboard</b>');
});


app.get('/getKPIs', function (req, res) {
    // JSON response
    // font awesome: https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=book (all not greyed out)
    const responseData = {
    items:[
        {
            icon: "fa-running",
            name: "Joggen",
            value: 1,
            goal: "8/month"
        },{
            icon: "fa-cloud",
            name: "Meditation",
            value: 0,
            goal: "4/month"
        },{
            icon: "fa-book-open",
            name: "Bücher",
            value: 0,
            goal: "6/year"
        },{
            icon: "fa-linkedin",
            name: "Experte",
            value: 0,
            goal: "4/year"
        }]
    
  };
  
    res.json(responseData);

});


// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('App listening on port 3000.');
});
