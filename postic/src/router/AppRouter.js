import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Navigation from "../components/navigation";

import Login from '../pages/login/login';

export default function AppRouter() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/login" component={ Login }/>
                <Route exact path="/modulo-ventas">
                    <h2>Ventas</h2>
                </Route>
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
