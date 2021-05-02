import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
   const [loggend, setLoggend] = useContext(UserContext);

   return (
      <Route
         {...rest}
         render={({ location }) =>
            loggend.email ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: '/login',
                     state: { from: location },
                  }}
               />
            )
         }
      />
   );
};

export default PrivateRoute;
