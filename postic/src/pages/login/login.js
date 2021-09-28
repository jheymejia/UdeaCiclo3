//import "./App.css";
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";
import Profile from "../../util/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

function Login() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Is Loading</h1>
  }

  return (
    

    
    <div className="Login">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}

export default Login;