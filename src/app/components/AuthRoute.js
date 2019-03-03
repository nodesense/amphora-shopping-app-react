// AuthRoute.js

import React from 'react';
import {Redirect, Route} from 'react-router-dom';

// reusable, HoC, protect unauthorized user accesing pages
function AuthRoute(props) {
    return (
        props.authenticated? <Route path={props.path} 
                                    exact={props.exact}
                                    render= { () => React.createElement(props.component)}
                             />
                            : <Redirect to="/login" />
    )
}

export default AuthRoute;
