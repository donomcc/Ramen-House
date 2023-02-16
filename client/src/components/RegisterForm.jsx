import React, { useContext, useRef } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const responseRef = useRef("");
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email: emailRef.current,
      password: passwordRef.current,
    });
    if (!emailRef.current || !passwordRef.current) {
      alert("Please fill in all fields");
      return;
    }
    axios
      .post("http://localhost:3001/register", {
        email: emailRef.current,
        password: passwordRef.current,
      })
      .then(() => {
        alert("Successful Register!");
        setIsAuthenticated(true);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          onChange={(e) => {
            emailRef.current = e.target.value;
          }}
        />
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
          ref={passwordRef}
          onChange={(e) => {
            passwordRef.current = e.target.value;
          }}
        />
        <button className={classes.button} type="submit">
          Sign Up
        </button>
      </form>
      <p className={classes.p}>{responseRef.current}</p>
    </div>
  );
};

export default RegisterForm;
