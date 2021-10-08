import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="my-3">
      <div className="input-group">
        <div className="input-group-text bg-white">
          <img
            className="img-fluid"
            alt="logo google"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <button
          onClick={() => loginWithRedirect()}
          type="submit"
          className="btn btn-secondary form-control"
        >
          Ingresar con Google{" "}
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
