import React from 'react';
import Widget1 from '../Components/API/Widget1';
import Widget2 from '../Components/API/Widget2';
import Widget3 from '../Components/API/Widget3';
import Widget4 from '../Components/API/Widget4';
import Widget5 from '../Components/API/Widget5';
import Navigation from '../Components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="row">
                <div className="column">
                    <Widget1 />
                    <Widget4 />
                    <Widget5 />
                    <Widget2 />
                </div>
                <div className="column">
                    <Widget3 />
                </div>
            </div>
        </div>
    );
}
export default Home;