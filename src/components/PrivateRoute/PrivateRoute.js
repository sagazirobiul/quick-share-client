import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const info = localStorage.getItem('info');
    const {email} = JSON.parse(info) || {};
    return (
        <Route
            {...rest}
            render={({ location }) =>
                email ? (
                    <Component/>
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;