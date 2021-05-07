import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavManu from './components/Common/NavManu';
import AddIptv from './components/Dashboard/AddIptv';
import AddServices from './components/Dashboard/AddServices';
import Book from './components/Dashboard/Book';
import BookingList from './components/Dashboard/BookingList';
import Dashboard from './components/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import ManageService from './components/Dashboard/ManageService';
import OrderList from './components/Dashboard/OrderList';
import Review from './components/Dashboard/Review';
import Home from './components/Home/Home';
import IptvData from './components/Iptv/IptvData';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
   const [loggend, setLoggend] = useState({});

   return (
      <UserContext.Provider value={[loggend, setLoggend]}>
         <Router>
            <NavManu />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/Iptv" component={IptvData} />

               <PrivateRoute exact path="/dashboard">
                  <Dashboard />
               </PrivateRoute>

               <PrivateRoute exact path="/dashboard/book/:id">
                  <Book />
               </PrivateRoute>

               <PrivateRoute exact path="/dashboard/bookinglist">
                  <BookingList />
               </PrivateRoute>

               <PrivateRoute exact path="/dashboard/review">
                  <Review />
               </PrivateRoute>

               <PrivateRoute exact path="/dashboard/orderlist">
                  <OrderList />
               </PrivateRoute>

               <PrivateRoute exact path="/dashboard/addservices">
                  <AddServices />
               </PrivateRoute>

               <PrivateRoute exact path="/dashboard/addIptv">
                  <AddIptv/>
               </PrivateRoute>

               <PrivateRoute exact path="/dashboard/makeadmin">
                  <MakeAdmin />
               </PrivateRoute>

               <PrivateRoute exact path="/dashboard/manageservice">
                  <ManageService />
               </PrivateRoute>

            </Switch>
         </Router>
      </UserContext.Provider>
   );
}

export default App;
