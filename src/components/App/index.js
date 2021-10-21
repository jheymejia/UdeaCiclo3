import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';


import Compras from "../../pages/compras/compras";
import Productos from "../../pages/productos/productos";
import Usuarios from "../../pages/usuarios/usuarios";
import Ventas from "../../pages/ventas/ventas";


import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />
      <Route exact path="/modulo-productos" component={Productos} />
      <Route exact path="/modulo-ventas" component={Ventas} />
      <Route exact path="/modulo-compras" component={Compras} />
      <Route exact path="/modulo-usuarios" component={Usuarios} />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />

    </div>
  </Router>
);

export default withAuthentication(App);
