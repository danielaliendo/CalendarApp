import React from 'react'
import {
    Switch,
    Route,
    Redirect,
    HashRouter,
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AppRouter = () => {
    return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/login">
                            <LoginScreen />
                        </Route>
                        <Route exact path="/register">
                            <RegisterScreen />
                        </Route>
                        <Route exact path="/">
                            <CalendarScreen />
                        </Route>

                        <Redirect to="/" />
                    </Switch>
                </div>
            </HashRouter>
    ) 
}
