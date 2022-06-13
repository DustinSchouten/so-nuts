const instructiesRoute = {
    method: "get",
    path: "/instructies",
    handle: (req, res) => res.render('instructies',{'pageTitle':'Instructies','pageStyle':'/css/homestyle.css'})
  };
  
export default instructiesRoute;


