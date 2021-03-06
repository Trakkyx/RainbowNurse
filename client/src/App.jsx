import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link 
 } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./pages/AboutUs";
import { ToastContainer } from "react-toastify"
import NHS from "./pages/NHS";
import NURSES from "./pages/NURSES";
import Contact from "./Component/Contact";
import ContactUs from "./pages/ContactUs";
const App = () => {
  const user =useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <ToastContainer/>
      <Switch>
       <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList />
         </Route>
         <Route path="/product/:id">
         <Product/>
        </Route>
        <Route path="/AboutUs">
         <AboutUs/>
        </Route>
         <Route path="/nhs">
         <NHS/>
         </Route>
          <Route path="/login">
            {user ? <Redirect to="/"/> : <Login/>}
          <Login/>
          </Route>
          <Route path="/nurses">
          <NURSES/>
          </Route>
          <Route path="/contactus">
          <ContactUs/>
          </Route>
      </Switch>
    </Router>
  );
};

export default App;