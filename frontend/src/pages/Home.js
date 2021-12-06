import React from 'react';
import Widget1 from '../Components/API/Widget1';
import Widget2 from '../Components/API/Widget2';
import Widget3 from '../Components/API/Widget3';
import Widget5 from '../Components/API/Widget5';
import Widget6 from '../Components/API/Widget6';
import "./Home.css";

// import Axios from 'axios';
import Navigation from '../Components/Navigation';

const Home = () => {

    return (
        <div className="home">
            <div className="nav">
                <Navigation />
            </div>
            <div className="row">
                <div className="column">
                    <div className="infos">
                        <Widget1 />
                        <Widget2 />
                    </div>
                    <div className="tab">
                        <Widget3 />
                    </div>
                </div>
                <div className="column">
                    <div className="graph">
                        <Widget5 />
                    </div>
                    <div className="monApi">
                        <Widget6 />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;