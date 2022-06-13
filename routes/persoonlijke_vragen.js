const persoonlijkevragenRoute = {
    method: "get",
    path: "/persoonlijke_vragen",
    handle: (req, res) => res.render('persoonlijke_vragen',{'pageTitle':'Persoonlijke vragen','pageStyle':'/css/persoonlijke_vragen_style.css'})
  };
  
export default persoonlijkevragenRoute;


