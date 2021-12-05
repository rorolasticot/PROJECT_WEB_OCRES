import React from 'react';
import WidgetMap from '../Components/Map/WidgetMap';
import Navigation from '../Components/Navigation';

const Map = () => {
    return (
        <div className="map">
            <Navigation />
            <WidgetMap />
        </div>
    );
}
export default Map;