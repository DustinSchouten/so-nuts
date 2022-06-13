const express = require('express');
const fetch = (...e)=>import("node-fetch").then(({default:t})=>t(...e));
const env = require('dotenv').config().parsed;

const app = express();

app.set('view engine', 'ejs');
app.set("views","./views");
app.use(express.static('public'));

// const routes = [
//     import("routes/index.js")
//     // import("routes/instructies.js"),
//     // import("routes/persoonlije_vragen.js"),
//     // import("routes/tussenscherm_voor_vragen_voeding.js"),
//     // import("routes/vragen_over_voeding.js"),
//     // import("routes/dashboard.js")
// ];

// for (const route of routes) {
//     routes.then(({ default: route }) => app[route.method](route.path, route.handle));
// }

app.get('/', function (req, res) {
    res.render('index',{'pageTitle':'SO-NUTS','pageStyle':'/css/homestyle.css'});
})

app.get('/instructies', function (req, res) {
    res.render('instructies',{'pageTitle':'Instructies','pageStyle':'/css/homestyle.css','iconSource':'images/instructies_icon.png'});
})

app.get('/tussenscherm_voor_persoonlijke_vragen', function (req, res) {
    res.render('tussenscherm_voor_persoonlijke_vragen',{'pageTitle':'Persoonlijke vragen','pageStyle':'/css/persoonlijke_vragen_style.css','iconSource':'images/persoonlijk_icon.png'});
})

app.get('/persoonlijke_vragen', function (req, res) {
    res.render('persoonlijke_vragen',{'pageTitle':'Persoonlijke vragen','pageStyle':'/css/persoonlijke_vragen_style.css','iconSource':'images/persoonlijk_icon.png'});
})

app.get('/tussenscherm_voor_vragen_voeding', function (req, res) {
    res.render('tussenscherm_voor_vragen_voeding',{'pageTitle':'Persoonlijke vragen','pageStyle':'/css/persoonlijke_vragen_style.css','iconSource':'images/persoonlijk_icon.png'});
})

app.get('/vragen_over_voeding', function (req, res) {
    res.render('vragen_over_voeding',{'pageTitle':'Intakelijst voeding','pageStyle':'/css/vragen_over_voeding_style.css','iconSource':'images/voeding_icon.png'});
})

app.get('/tussenscherm_voor_vragen_beweging', function (req, res) {
    res.render('tussenscherm_voor_vragen_beweging',{'pageTitle':'Intakelijst voeding','pageStyle':'/css/vragen_over_voeding_style.css','iconSource':'images/voeding_icon.png'});
})

app.get('/vragen_over_beweging', function (req, res) {
    res.render('vragen_over_beweging',{'pageTitle':'Intakelijst beweging','pageStyle':'/css/vragen_over_beweging_style.css','iconSource':'images/beweging_icon.png'});
})

app.get('/dashboard', function (req, res) {
    res.render('dashboard',{'pageTitle':'Mijn dashboard','pageStyle':'/css/dashboardstyle.css','iconSource':'images/dashboard_icon.png'});
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})