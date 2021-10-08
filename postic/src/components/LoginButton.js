import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div class="my-3">
      <div class="input-group">

        <div class="input-group-text bg-white">
          <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <button onClick={() => loginWithRedirect()} type="submit" class="btn btn-secondary form-control">Ingresar con Google </button>
      </div> 

    </div>



  );
};

export default LoginButton;
