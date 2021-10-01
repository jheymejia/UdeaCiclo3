import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Navigation from "../components/navigation";
import React from "react";

import Compras from "../pages/compras/compras";
import Authentication from "../util/Authentication";
import Productos from "../pages/productos/productos";
import Usuarios from "../pages/usuarios/usuarios";
import Ventas from "../pages/ventas/ventas";

export default function AppRouter() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/login" component={ Authentication } />
                <Route exact path="/modulo-productos" component={ Productos }/>
                <Route exact path="/modulo-ventas" component={ Ventas }/>
                <Route exact path="/modulo-compras" component={ Compras }/>
                <Route exact path="/modulo-usuarios" component={ Usuarios } />
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
