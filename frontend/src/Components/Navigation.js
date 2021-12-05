import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (

        <div className="navigation">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/option">
                Option
            </NavLink>
            <NavLink to="/map">
                Map
            </NavLink>
        </div>
    );
}
export default Navigation;