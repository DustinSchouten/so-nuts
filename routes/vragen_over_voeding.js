const vragenOverVoedingRoute = {
    method: "get",
    path: "/vragen_over_voeding",
    handle: (req, res) => res.render('vragen_over_voeding',{'pageTitle':'Vragen over voeding','pageStyle':'/css/vragen_over_voeding_style.css'})
  };
  
export default vragenOverVoedingRoute;