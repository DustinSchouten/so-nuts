const dashboardRoute = {
    method: "get",
    path: "/dashboard",
    handle: (req, res) => res.render('dashboard',{'pageTitle':'Mijn dashboard','pageStyle':'/css/homestyle.css'})
  };
  
export default dashboardRoute;