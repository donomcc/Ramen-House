import React, { useContext, useState } from "react";

import Navbar from "../components/Navbar";
import "./Admin.css";
import Footer from "../components/Footer";
import AddMealForm from "../components/AddMealForm";
import AuthContext from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function Admin() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar />
      {!isAuthenticated ? (
        <>
          <h1 className="centered">Admin</h1>
          {!showLogin ? <RegisterForm /> : <LoginForm />}
          <button className="centered" onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? "Switch to Register" : "Switch to Login"}
          </button>
        </>
      ) : (
        <AddMealForm />
      )}
      <Footer />
    </>
  );
}

export default Admin;
