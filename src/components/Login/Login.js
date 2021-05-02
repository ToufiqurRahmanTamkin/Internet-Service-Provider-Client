import React, { useContext, useState } from 'react';
import {
   firebaseInitialize,
   googleProvider,
   signInWithSocialPopup,
} from '../Firebase/Firebase';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Alert } from 'react-bootstrap';
import google_icon from '../../image/google.png';
import './Login.css';

firebaseInitialize();

const Login = () => {
   const [loggend, setLoggend] = useContext(UserContext);
   const history = useHistory();
   const location = useLocation();
   const [show, setShow] = useState(loggend.errorMessage);

   const { from } = location.state || { from: { pathname: '/' } };

   const handleLogin = () => {
      signInWithSocialPopup(googleProvider)
         .then((result) => {
            setLoggend(result);
            history.replace(from);
         })
         .catch((error) => {
            setLoggend(error);
         });
   };

   return (
      <div className="login container">
         <div className="login-container">
            {show && (
               <Alert
                  variant="danger"
                  onClose={() => setShow(false)}
                  dismissible
                  className="text-center"
               >
                  {loggend.errorMessage}
               </Alert>
            )}
            <button className="btn login-btn" onClick={handleLogin}>
               <img src={google_icon} alt="google_icon" />
               <span>Sign in with Google</span>
            </button>
         </div>
      </div>
   );
};

export default Login;
