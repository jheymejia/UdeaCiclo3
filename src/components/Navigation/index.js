import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
//ROLES

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <ul>
     <li>
      <Link to="/modulo-ventas">Ventas</Link>
    </li>
    <li>
      <Link to="/modulo-usuarios">Usuarios</Link>
    </li>
    <li>
      <Link to="/modulo-productos">Productos</Link>
    </li>
    <li>
      <Link to="/modulo-compras">Compras</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>

    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to="/modulo-ventas">Ventas</Link>
    </li>
    <li>
      <Link to="/modulo-usuarios">Usuarios</Link>
    </li>
    <li>
      <Link to="/modulo-productos">Productos</Link>
    </li>
    <li>
      <Link to="/modulo-compras">Compras</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
