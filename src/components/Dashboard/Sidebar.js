import {
    faPlus,
    faSatelliteDish,
    faShoppingBag,
    faSortAmountUp,
    faTasks,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import Loading from '../Common/Loading';

const Sidebar = () => {
    const [loggend, setLoggend] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(
                `https://isp-server0.herokuapp.com/admin?email=${loggend.email}`
            )
            .then((res) => {
                setLoading(false);
                setIsAdmin(res.data);
            })
            .catch((err) => console.log(err));
    }, [loggend.email]);

    if (loading) {
        return <div className="pt-9">Loading...</div>;
    }

    return (
        <ul className="sidebar pt-9">
            {isAdmin ? (
                <>
                    <li>
                        <NavLink
                            className="nav-link"
                            to="/dashboard/orderlist"
                            activeClassName="sidebar-selected"
                        >
                            <FontAwesomeIcon icon={faSortAmountUp} /> Order List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav-link"
                            to="/dashboard/addservices"
                            activeClassName="sidebar-selected"
                        >
                            <FontAwesomeIcon icon={faPlus} /> Add Service
                        </NavLink>
                    </li>
                    {/* add ip tv service */}
                    <li>
                        <NavLink
                            className="nav-link"
                            to="/dashboard/addIptv"
                            activeClassName="sidebar-selected"
                        >
                            <FontAwesomeIcon icon={faPlus} /> Add IpTv
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="nav-link"
                            to="/dashboard/makeadmin"
                            activeClassName="sidebar-selected"
                        >
                            <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav-link"
                            to="/dashboard/manageservice"
                            activeClassName="sidebar-selected"
                        >
                            <FontAwesomeIcon icon={faTasks} /> Manage Service
                        </NavLink>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <NavLink
                            className="nav-link"
                            to="/dashboard/bookinglist"
                            activeClassName="sidebar-selected"
                        >
                            <FontAwesomeIcon icon={faShoppingBag} /> Booking
                            List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav-link"
                            to="/dashboard/review"
                            activeClassName="sidebar-selected"
                        >
                            <FontAwesomeIcon icon={faSatelliteDish} /> Review
                        </NavLink>
                    </li>
                </>
            )}
        </ul>
    );
};

export default Sidebar;
