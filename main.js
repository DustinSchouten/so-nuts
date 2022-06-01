const express = require('express');
const fetch = (...e)=>import("node-fetch").then(({default:t})=>t(...e));
const env = require('dotenv').config().parsed;

const app = express();

app.set('view engine', 'ejs');
app.set("views","./views");
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index',{'pageTitle':'SO-NUTS'});
})

app.get('/instructies', function (req, res) {
    res.render('instructies',{'pageTitle':'Instructies'});
})

app.get('/persoonlijke_vragen', function (req, res) {
    res.render('persoonlijke_vragen',{'pageTitle':'Persoonlijke vragen'});
})

app.get('/vragen_over_voeding', function (req, res) {
    res.render('vragen_over_voeding',{'pageTitle':'Vragen over voeding'});
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})