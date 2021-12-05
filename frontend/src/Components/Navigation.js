import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (

        <div className="navigation">
            <div className="barre">
                <div className="button">
                    <NavLink to="/">
                        <div className="titreButton"> Home</div>
                    </NavLink>
                </div>
                <div className="button">
                    <NavLink to="/option">
                        <div className="titreButton">Option</div>
                    </NavLink>
                </div>
                <NavLink to="/map">
                    <div className="titreButton">Map</div>
                </NavLink>
            </div>


        </div>
    );
}
export default Navigation;