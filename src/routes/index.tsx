import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}

export { Routes }