const express = require('express');
const fetch = (...e)=>import("node-fetch").then(({default:t})=>t(...e));
const env = require('dotenv').config().parsed;
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');
app.set("views","./views");
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const api_url = "https://sonuts.chippr.dev/api/Categories";

// In de api_response zitten drie vragenlijsten in een bepaalde volgorde.
const vragenlijst_personalia_index = 2;
const vragenlijst_voeding_index = 0;
const vragenlijst_beweging_index = 1;

// Fallback voor als de api niet werkt
const vragenlijsten_fallback_json = [{"id":"7f276f90-80e7-472e-a7e6-9ccbd37cd5b7","isActive":true,"name":"Voeding","color":"94BF31","questionnaire":{"id":"7c02d5f9-5785-46b7-b0cb-6383c4a1c971","title":"Intake","description":"Vragen over voeding","questions":[{"id":"49c3b79f-b73a-4149-bd0c-ed5e53026cca","type":"MultipleOpen","text":"Heeft u speciale voedingsgewoontes?","description":"Meerdere antwoorden mogelijk","order":8,"answerOptions":[{"id":"4147495d-65bf-4d6a-817c-6262c7129df3","text":"Ik eet geen vlees, maar wel vis","order":2},{"id":"5475e63a-c102-4b12-a35c-e82b08928f9f","text":"Ik eet vegetarisch","order":1},{"id":"6dd38fb0-9721-44fc-9cf7-86ecf4089988","text":"Nee","order":0},{"id":"8f323a77-6f53-4d14-b5d8-adc1b468c9df","text":"Ik eet veganistisch","order":3},{"id":"93121c99-d726-46ac-a421-7c46735dddd4","text":"Ik eet flexitarisch","order":6},{"id":"ce5b7307-32ba-4144-a885-37006c8a48fd","text":"Ja, anders namelijk:","order":7},{"id":"ded24079-aa37-4cd0-94b2-df08e4b7c0f7","text":"Ik eet geen varkensvlees","order":4},{"id":"e7dff0e7-81e1-4d18-bed1-8148a597258f","text":"Ik eet geen koeienvlees","order":5}]},{"id":"73837470-5d4e-44fa-86e2-5f8aa2b6680b","type":"Open","text":"Speciale voedingsgewoontes","order":1,"questionDependency":{"questionId":"73837470-5d4e-44fa-86e2-5f8aa2b6680b","operator":"Equals","value":"Ja, anders namelijk:"},"answerOptions":[]}]},"themes":[{"id":"a95d83fe-ca40-4359-9a5b-c328251cfec0","name":"Groenten","description":"Dagelijks ten minste 200 gram groente","image":{"id":"babee0ad-3872-42a2-8c38-aa1f478738a2"},"frequencyType":"Amount","frequencyGoal":1400,"currentQuestion":"Hoe vaak in de week eet je al groente?","goalQuestion":"Hoe vaak in de week wil je groente eten?","isRecommend":false,"activities":[{"id":"0e0f6a9a-d545-4ab1-8eb9-b1bd2aa1c3c6","name":"Ontbijt","description":"Eet groente bij het ontbijt","image":{"id":"97900c3d-17fd-4f06-98b0-f6d1a2205f5c"}},{"id":"4b18a4e1-99af-4e17-bc95-18c8b1669c2c","name":"Snack","description":"Eet groente als snack","image":{"id":"c936d09c-b275-4504-99ee-a9f8c5f264a0"}},{"id":"eff3c562-76e5-4959-82e8-3bf2c4b5f891","name":"Avondeten","description":"Eet groente bij het avond eten","image":{"id":"eae71bd2-206c-456f-a1a5-c1f60a60f5f9"}},{"id":"f839b077-b8c0-4a8c-900a-6eb314b8338a","name":"Lunch","description":"Eet groente bij de lunch","image":{"id":"09a26539-d262-4fe5-b83e-d49d74c34ae9"}}]}]},{"id":"ef2cac2a-5081-4c73-b5ed-36914fd464fa","isActive":true,"name":"Bewegen","color":"3DA9DE","questionnaire":{"id":"fa9e520d-382c-4403-a2b1-2f235cbe6e4a","title":"Intake","description":"Vragen over beweging","questions":[{"id":"1c063fbd-77d1-47b2-8568-c3c92fde75fc","type":"MultipleChoice","text":"Hoeveel minuten gemiddeld per dag?","order":2,"questionDependency":{"questionId":"1c063fbd-77d1-47b2-8568-c3c92fde75fc","operator":"Equals","value":"Ja"},"answerOptions":[{"id":"46d85296-ea03-4833-9a07-e78b4d5b8f17","text":"Snel","order":2},{"id":"9e0132e6-d3ec-4264-b990-8c5a48ca91f1","text":"Gemiddeld","order":1},{"id":"b71d5891-9649-4126-b777-66e9c9e84a63","text":"Langzaam","order":0}]},{"id":"261e4fab-2094-42af-8a6f-808b9a7506cd","type":"MultipleChoice","text":"Is er spraken van lopen van/naar werk?","order":0,"answerOptions":[{"id":"21147860-8d2b-469c-8c0f-24ad6cd11af5","text":"Nee","order":0},{"id":"add3aff4-1bee-4983-aeeb-c9e618266216","text":"Ja","order":1}]},{"id":"58c3228f-69a6-4280-ad25-cbd6b8e018a7","type":"Integer","text":"Hoeveel minuten gemiddeld per dag?","order":2,"questionDependency":{"questionId":"58c3228f-69a6-4280-ad25-cbd6b8e018a7","operator":"Equals","value":"Ja"},"answerOptions":[]},{"id":"cc7a4fe5-7240-4f3f-b187-867fb9ec5c6a","type":"Integer","text":"Hoeveel dagen per week?","order":1,"questionDependency":{"questionId":"cc7a4fe5-7240-4f3f-b187-867fb9ec5c6a","operator":"Equals","value":"Ja"},"answerOptions":[]}]},"themes":[{"id":"731db884-9577-473e-9dd9-3eac85a66fbf","name":"Intensief bewegen","description":"Minimaal 150 minuten per week bewegen","image":{"id":"b2b32587-3175-4459-86bb-13542e0364f2"},"frequencyType":"Minutes","frequencyGoal":150,"currentQuestion":"Welke beweging doe je al?","goalQuestion":"Welke beweging wil je nog meer doen?","isRecommend":false,"activities":[{"id":"6dc2f31d-3713-4009-8233-32b072d0824c","name":"Gymnastiek","description":"Minuten gymnastiek","image":{"id":"8d54ea32-6bc9-4f2d-84c5-96e24c3340c9"}},{"id":"790a7bf8-c73a-4588-aeda-56b135a36c12","name":"Fietsen","description":"Minuten fietsen","image":{"id":"37e0766d-bd2a-448c-b705-6fe913b9aad6"}},{"id":"d8e03477-8526-4590-980b-587a76e8a4d0","name":"Dadminton","description":"Minuten badminton","image":{"id":"3315d36e-bba2-477c-be96-6d8f63b6e93b"}},{"id":"e295bbcb-2f83-4768-b41f-d27cb61454f3","name":"Zwemmen","description":"Minuten zwemmen","image":{"id":"2a1e2df7-b3c6-4879-a901-aa0c362eacff"}},{"id":"faac15c2-15b8-41fa-8a14-b96a95a7acfd","name":"Wandelen","description":"Minuten wandelen","image":{"id":"b367c6f0-7d23-49e1-bdc4-f31ffc0049f7"}},{"id":"ff476ab8-7ec7-4ed8-9c57-c879b5a5fefc","name":"Geen","description":"Geen beweging","image":{"id":"4c168522-d1b4-4629-b031-31b976b42157"}}]}]},{"id":"efc0026f-7799-4f77-9bb4-3bb0bf0c2c5a","isActive":true,"name":"Intake","color":"F6B042","questionnaire":{"id":"7b917bc1-26ed-4b20-a1d8-015460e1546b","title":"Intake","description":"Persoonlijke gegevens","questions":[{"id":"127c16aa-83fe-43a3-9ff6-cf39359fc31d","type":"Open","text":"Welke andere situatie?","order":6,"questionDependency":{"questionId":"127c16aa-83fe-43a3-9ff6-cf39359fc31d","operator":"Equals","value":"Anders, namelijk:"},"answerOptions":[]},{"id":"157b8707-4410-467a-b0cc-c83acea7d61a","type":"Open","text":"Welke andere opleiding?","order":9,"questionDependency":{"questionId":"157b8707-4410-467a-b0cc-c83acea7d61a","operator":"Equals","value":"Anders, namelijk:"},"answerOptions":[]},{"id":"43154400-add8-4fb2-a49b-a771110b6848","type":"MultipleChoice","text":"Heb je kinderen?","order":7,"answerOptions":[{"id":"3ce527ed-611a-45cb-885a-9b44b81a8c65","text":"Nee","order":0},{"id":"fc64c50d-32c7-4084-ab4a-42a46bc5845e","text":"Ja","order":1}]},{"id":"471101e5-ec92-44f7-931b-5c6a8b28664c","type":"Open","text":"Welke andere arbeidspositie?","order":11,"questionDependency":{"questionId":"471101e5-ec92-44f7-931b-5c6a8b28664c","operator":"Equals","value":"Anders, namelijk:"},"answerOptions":[]},{"id":"547b81c1-4bf1-49ae-b3e8-8a485996c845","type":"Open","text":"In welk land is jouw moeder geboren?","order":3,"answerOptions":[]},{"id":"70f2e847-9dd1-45ac-986f-c2fb26ae6005","type":"Integer","text":"Wat is je lengte?","description":"In centimeters","order":12,"answerOptions":[]},{"id":"7565096f-9c8e-4e62-bdc7-9cd73ade8349","type":"MultipleOpen","text":"Welke van de onderstaande beschijvingen past het beste bij jouw situatie?","order":5,"maxAnswers":3,"answerOptions":[{"id":"116e4ab0-46c8-44f0-8347-b794c8094e1f","text":"Weduwnaar","order":4},{"id":"46a140e3-02fa-479e-8eea-147ce2e15c5a","text":"Getrouwd","order":1},{"id":"62b663d8-2890-49ca-833d-7ade5a79dce1","text":"Samenwonend","order":2},{"id":"655f379a-7fc0-4de2-9e4f-1fb8d5b6f1fc","text":"Apart wonend","order":3},{"id":"a242c925-0a00-43e0-ac6a-10bf04359eb1","text":"Alleenstaand","order":0},{"id":"d615bdec-6fb3-48a8-8439-e42c0ae61d8f","text":"Gescheiden","order":5},{"id":"ded121e7-bcd3-43ef-9a44-6f6d926a62ae","text":"Anders, namelijk:","order":6}]},{"id":"83f09806-67d6-4dcf-acc0-6e707c65a092","type":"Open","text":"In welk land ben je zelf geboren?","order":2,"answerOptions":[]},{"id":"999d06ed-d0ca-46ff-8971-71193538db8d","type":"MultipleChoice","text":"Wat is de hoofste opleiding die jij hebt afgerond?","order":8,"answerOptions":[{"id":"49505b10-90bf-4d40-a9d6-11c6f8f992c4","text":"Wetenschappelijk onderwijs / uni","order":6},{"id":"55e4ae60-9aac-4796-ad81-44fdee71bf32","text":"Geen opleiding afgemaakt","order":0},{"id":"78d5b9c4-6e7a-4bbf-8c94-40fe9f990552","text":"Anders, Namelijk:","order":7},{"id":"b506cc03-6956-426f-9a13-433769dd28b4","text":"Basisschool / lager beroepsonderwijs","order":1},{"id":"c60f1900-9872-4310-b12e-52d10043ad93","text":"HBO","order":5},{"id":"c6e8823a-9683-41c2-ab33-ffcb31d3bf10","text":"MBO / MTS / MEAO / HAVO / VWO","order":4},{"id":"fac9e70b-c7fe-4cbb-8123-92004dd0c124","text":"VMBO / MAVO / MULO","order":3}]},{"id":"b000493e-6123-46c0-b0ac-b5b18843c65c","type":"Decimal","text":"Wat is jouw gewicht?","description":"In kilogram","order":13,"answerOptions":[]},{"id":"e9efcf8e-955d-4017-9ab3-d57f2238cd02","type":"MultipleOpen","text":"Wat is jouw arbeidspositie?","description":"Meerdere antwoorden mogelijk","order":10,"answerOptions":[{"id":"1dec18e8-228a-4511-a6c2-148b6abfb883","text":"Niet werkzaam en niet gepensioneerd","order":6},{"id":"2bbcfc64-4d2a-4a8b-9104-4b13238aaa6f","text":"Gepensioneerd","order":3},{"id":"2f1afacc-2f9e-4565-ac8a-b0752480aaa4","text":"Werken - voltijds","order":0},{"id":"3f8f00db-3aa8-4e62-b5ff-eaa64efe2bc6","text":"Anders, Namelijk:","order":8},{"id":"69923cfd-5792-40bd-93ac-b3812b8a85a9","text":"Werken - deeltijds","order":1},{"id":"77d26f61-7fbe-47eb-9007-d8f031030318","text":"Blijvend arbeidsongeschikt / ziek","order":7},{"id":"8f726725-f1fa-4527-9a55-18220793e5de","text":"Student","order":5},{"id":"e9e4e643-517a-46fd-877c-3303483abe4e","text":"Huisman/vrouw","order":4}]},{"id":"ea9b4c49-5c4d-466d-b0bc-2d7c32085ebb","type":"MultipleChoice","text":"Wat is je geslacht?","order":1,"answerOptions":[{"id":"18737554-398a-441a-8798-b94fa26b21e4","text":"Man","order":0},{"id":"62bf9783-04d5-436a-8014-305ad4b7b1dd","text":"Anders","order":2},{"id":"63f1fdc2-b70b-4b19-b57b-b7763d2e4ea1","text":"Vrouw","order":1}]},{"id":"f2a18e8e-b486-41ce-874e-8df1539ab40c","type":"Open","text":"In welk land is jouw vader geboren?","order":4,"answerOptions":[]},{"id":"fe3a386a-631d-41c0-a48f-7269b83f2a44","type":"Integer","text":"Wat is leeftijd?","order":0,"answerOptions":[]}]},"themes":[]}];

// Alle verschillende get en post requests
app.get('/', function (req, res) {
    res.render('index',{'pageTitle':'SO-NUTS','pageStyle':'/css/homestyle.css'});
})

app.get('/onboarding_1', function (req, res) {
    res.render('onboarding_1',{'pageTitle':'Welkom bij SO-NUTS!','pageStyle':'/css/homestyle.css','iconSource':'images/empty.png'});
})

app.get('/onboarding_2', function (req, res) {
    res.render('onboarding_2',{'pageTitle':'Welkom bij SO-NUTS!','pageStyle':'/css/homestyle.css','iconSource':'images/empty.png'});
})

app.get('/onboarding_3', function (req, res) {
    res.render('onboarding_3',{'pageTitle':'Welkom bij SO-NUTS!','pageStyle':'/css/homestyle.css','iconSource':'images/empty.png'});
})

app.get('/onboarding_4', function (req, res) {
    res.render('onboarding_4',{'pageTitle':'Welkom bij SO-NUTS!','pageStyle':'/css/homestyle.css','iconSource':'images/empty.png'});
})

app.get('/tussenscherm_voor_persoonlijke_vragen', function (req, res) {
    res.render('tussenscherm_voor_persoonlijke_vragen',{'pageTitle':'Persoonlijke vragen','pageStyle':'/css/persoonlijke_vragen_style.css','iconSource':'images/persoonlijk_icon.png'});
})

app.get('/persoonlijke_vragen', function (req, res) {
    fetchJson(api_url).then(function (data) {
        const data_to_render = data[vragenlijst_personalia_index].questionnaire.questions;
        res.render('persoonlijke_vragen',{'pageTitle':'Persoonlijke vragen','pageStyle':'/css/persoonlijke_vragen_style.css','iconSource':'images/persoonlijk_icon.png','data':data_to_render});
    });
})

app.post('/tussenscherm_voor_vragen_voeding', function (req, res) {
    const user_input_persoonlijke_vragen = JSON.stringify(req.body);
    console.log('Antwoorden persoonlijke vragen opgevangen op de server: ',user_input_persoonlijke_vragen)
    res.render('tussenscherm_voor_vragen_voeding',{'pageTitle':'Intakelijst voeding','pageStyle':'/css/vragen_over_voeding_style.css','iconSource':'images/voeding_icon.png'});
})

app.get('/tussenscherm_voor_vragen_voeding', function (req, res) {
    res.render('tussenscherm_voor_vragen_voeding',{'pageTitle':'Intakelijst voeding','pageStyle':'/css/vragen_over_voeding_style.css','iconSource':'images/voeding_icon.png'});
})

app.get('/vragen_over_voeding', function (req, res) {
    fetchJson(api_url).then(function (data) {
        const data_to_render = data[vragenlijst_voeding_index].questionnaire.questions;
        res.render('vragen_over_voeding',{'pageTitle':'Intakelijst voeding','pageStyle':'/css/vragen_over_voeding_style.css','iconSource':'images/voeding_icon.png','data':data_to_render});
    });
})

app.post('/tussenscherm_voor_vragen_beweging', function (req, res) {
    const user_input_vragen_over_voeding = JSON.stringify(req.body);
    console.log('Antwoorden intakelijst voeding op de server: ',user_input_vragen_over_voeding)
    res.render('tussenscherm_voor_vragen_beweging',{'pageTitle':'Intakelijst beweging','pageStyle':'/css/vragen_over_beweging_style.css','iconSource':'images/beweging_icon.png'});
})

app.get('/tussenscherm_voor_vragen_beweging', function (req, res) {
    res.render('tussenscherm_voor_vragen_beweging',{'pageTitle':'Intakelijst beweging','pageStyle':'/css/vragen_over_beweging_style.css','iconSource':'images/beweging_icon.png'});
})

app.get('/vragen_over_beweging', function (req, res) {
    fetchJson(api_url).then(function (data) {
        const data_to_render = data[vragenlijst_beweging_index].questionnaire.questions;
        res.render('vragen_over_beweging',{'pageTitle':'Intakelijst beweging','pageStyle':'/css/vragen_over_beweging_style.css','iconSource':'images/beweging_icon.png','data':data_to_render});
    });
})

app.get('/tussenscherm_voor_dashboard', function (req, res) {
    res.render('tussenscherm_voor_dashboard',{'pageTitle':'Bedankt voor het invullen!','pageStyle':'/css/persoonlijke_vragen_style.css','iconSource':'images/empty.png'});
})

app.post('/tussenscherm_voor_dashboard', function (req, res) {
    const user_input_vragen_over_beweging = JSON.stringify(req.body);
    console.log('Antwoorden intakelijst beweging opgevangen op de server: ',user_input_vragen_over_beweging)
    res.render('tussenscherm_voor_dashboard',{'pageTitle':'Bedankt voor het invullen!','pageStyle':'/css/persoonlijke_vragen_style.css','iconSource':'images/empty.png'});
})

app.get('/dashboard', function (req, res) {
    res.render('dashboard',{'pageTitle':'Mijn dashboard','pageStyle':'/css/dashboardstyle.css','iconSource':'images/dashboard_icon.png'});
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

async function fetchJson(url) {
    return await fetch(url)
        .then((response) => { // Kijk of de response status OK is. Zo ja, return de response data.
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            }
            else {
                return vragenlijsten_fallback_json; // Fallback
            } 
        })
        .then((data) => data)
        .catch((error) => error)
}