import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const endpoint = register ? "/register" : "/login";
      const res = await axios.post(`http://localhost:3001${endpoint}`, {
        email,
        password,
      });
      setIsAuthenticated(true);
      console.log(res.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">{register ? "Register" : "Login"}</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
}

export default LoginForm;
