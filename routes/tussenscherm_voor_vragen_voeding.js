const tussenschermVoorVragenVoedingRoute = {
    method: "get",
    path: "/tussenscherm_voor_vragen_voeding",
    handle: (req, res) => res.render('tussenscherm_voor_vragen_voeding',{'pageTitle':'Persoonlijke vragen','pageStyle':'/css/homestyle.css'})
  };
  
export default tussenschermVoorVragenVoedingRoute;