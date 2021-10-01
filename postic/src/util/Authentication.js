import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

import Login from '../pages/login/login';

const domain = "dev-pckqg2y3.us.auth0.com";
const clientId = "SyyA6duWXNNe3pZhkvRYJ3gp59oqPsQT";

export default function Authentication() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri="http://localhost:3000/login"
    >
      <Login />
    </Auth0Provider>
  );
}
