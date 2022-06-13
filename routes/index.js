const indexRoute = {
    method: "get",
    path: "/",
    handle: (req, res) => res.render('index',{'pageTitle':'SO-NUTS','pageStyle':'/css/homestyle.css'})
  };
  
export default indexRoute;