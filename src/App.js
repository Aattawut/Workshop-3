import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./components/main/counter";
import Navbar from "./components/main/layouts/navbar";
import Product from "./components/main/Products.js";
import Category from "./components/main/Category";
import Login from "./components/accounts/login";
import Signup from "./components/accounts/signup";
import AddPersonForm from "./components/main/Addpersonform";
import Cart from "./components/main/Cart";
import Footer from "./components/main/layouts/footer";
import Productdetail from "./components/main/Productdetail";
import Users from "./components/main/userstest";
import Homepage from "./components/main/home";
import Invoice from "./components/main/invoice";
import InvoiceDetail from "./components/main/invoiceitem";
import ScrollToTop from "./components/main/layouts/scrolltotop";
// import formComment from "./components/main/comment";

// import { useSelector } from "react-redux";

// function UnAuthApp() {
//   return (
//     <Switch>
//       <Router>
//         <Route path="/" exact render={() => <Product />} />
//         <Route path="/home" exact render={() => <Homepage />} />
//         <Route path="/product" exact render={() => <Product />} />
//         <Route path="/product/:category__in" exact render={() => <Product />} />
//         <Route path="/login" render={() => <Login />} />
//         <Route path="/signup" render={() => <Signup />} />
//         <Route
//           path="/productdetail/:productid"
//           render={() => <Productdetail />}
//         />
//         <Route path="/user" render={() => <Users />} />

//         {/* <Route render={() => <Counter />} /> */}
//       </Router>
//     </Switch>
//   );
// }

function AuthApp() {
  return (

    <div className="App-content">

      <Switch>
        <Router>
          <Navbar/>
          <ScrollToTop>
        {/* <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}> */}
          <Route path="/" exact render={() => <Product />} />
          <Route path="/home" exact render={() => <Homepage />} />

          <Route path="/product" exact render={() => <Product />} />
          <Route path="/invoice" exact render={() => <Invoice />} />
          <Route
            path="/invoicedetail"  render={() => <InvoiceDetail />}
          />
          <Route
            path="/invoicedetail:invoiceid" exact render={() => <InvoiceDetail />}
          />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/signup" exact render={() => <Signup />} />
          <Route
            path="/product/category/:category__in"
            exact
            render={() => <Product />}
          />
          <Route
            path="/product/category/search/:search"
            exact
            render={() => <Product />}
          />
          <Route
            path="/productdetail/:productid"
            render={() => <Productdetail />}
          />
          
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/user" render={() => <Users />} />
          {/* <Route render={() => <Counter />} /> */}
        {/* </Router> */}
        </ScrollToTop>
        <Footer/>
        </Router>
      </Switch>
     
    </div>
  );
}

function App() {
  // const {user} = useSelector(state => state.auth)
  return (
    
    <div className="App">
      {/* <Navbar/> */}
      <React.Fragment>
        <div>

        <AuthApp />
        </div>
      </React.Fragment>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
