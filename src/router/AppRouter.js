import React, { useEffect } from 'react';
import {
    Switch,
    Redirect,
    HashRouter
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { Loading } from '../components/ui/Loading';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

    useEffect(() => {

        dispatch(startChecking());

    }, [dispatch])

    if (checking) {
        return (<Loading />);
    }

    return (
        <HashRouter>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={!!uid}
                    />

                    <PublicRoute
                        exact
                        path="/register"
                        component={RegisterScreen}
                        isAuthenticated={!!uid}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={CalendarScreen}
                        isAuthenticated={!!uid}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </HashRouter>
    )
}
