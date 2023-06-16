import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* import Footer from "../components/Footer";
import Header from "../components/Header"; */
/* import Aboutus from "../Aboutus";
import AccountType from "../AccountType";
import SignupParent from "../SignupParent";
import SignupChild from "../SignupChild";
import LoginChild from "../LoginChild"
import LoginParent from "../LoginParent";
import Profile from "../Profile"; */
import Page404 from "../../pages/Page404";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";

const BasicRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/account-type" element={<AccountType />} />
          <Route exact path="/parent/signup" element={<SignupParent />} />
          <Route exact path="/child/signup" element={<SignupChild />} />
          <Route exact path="/parent/login" element={<LoginParent />} />
          <Route exact path="/child/login" element={<LoginChild />} />
          <Route exact path="/profile" element={<Profile />} /> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      {/* <Header />
      
      <Footer /> */}
    </Router>
  );
};

export default BasicRoutes;