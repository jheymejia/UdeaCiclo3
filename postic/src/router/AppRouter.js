import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Navigation from "../components/navigation";
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

import Login from '../pages/login/login';
import Ventas from "../pages/ventas/ventas";
import Compras from "../pages/compras/compras";
import Productos from "../pages/productos/productos";
const domain = 'dev-pckqg2y3.us.auth0.com';
const clientId = 'SyyA6duWXNNe3pZhkvRYJ3gp59oqPsQT';
console.log(domain);
console.log(clientId);



export default function AppRouter() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/login" >
                    <React.StrictMode>
                        <Auth0Provider
                            domain={domain}
                            clientId={clientId}
                            redirectUri='http://localhost:3000/login'
                        >
                            <Login />
                        </Auth0Provider>
                    </React.StrictMode>
                </Route>
                <Route exact path="/modulo-productos" component={Productos}/>
                <Route exact path="/modulo-ventas" component={Ventas}/>
                <Route exact path="/modulo-compras" component={Compras}/>
                    
                <Route exact path="/modulo-usuarios">
                    <h1>Usuarios</h1>
                </Route>
                <Route exact path="/">
                    <Redirect to="/modulo-ventas"></Redirect>
                </Route>
                <Route path="/*">
                    <h1 className="mx-auto">Error 404 Page not found</h1>
                </Route>
            </Switch>

        </Router>
    )
}
