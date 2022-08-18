import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";

function Routes() {
    const { user } = useUser()

    return (
        <Router>
            {!user ? (
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Redirect to="/login" />
                </Switch>) :
                (<Switch>
                    <Route path="/" >
                        <Dashboard />
                    </Route>
                    <Redirect to="/" />
                </Switch>)
            }
        </Router>
    );
}

export { Routes }