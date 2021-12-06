import React from "react";
import { MapContainer, Circle, TileLayer } from 'react-leaflet';

export default class Leaflet extends React.Component {
    render() {
        const position = [35, -40];
        const zoom = 2;
        return (
            <MapContainer center={position} zoom={zoom}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                />
                {this.props.infectedOn &&
                    <MyCircles data={this.props.infectedData} date={this.props.date} color="red" />
                }
                {this.props.recoveredOn &&
                    <MyCircles data={this.props.recoveredData} date={this.props.date} color="green" />
                }
                {this.props.deathOn &&
                    <MyCircles data={this.props.deathData} date={this.props.date} color="black" />
                }
            </MapContainer>)
    }
}

const MyCircles = (props) => {
    return (
        props.data.map((row, i) => {
            if (row[props.date] <= 0) {
                // No cases on this date
                return null;
            }
            if (row["Lat"] != null && row["Long"] != null) {
                return (
                    <Circle
                        key={i}
                        center={[row["Lat"], row["Long"]]}
                        radius={1000 * Math.sqrt(row[props.date])}
                        fillOpacity={0.5}
                        fillColor={props.color}
                        stroke={false}
                    />)
            }
            else {
                return null;
            }
        }
        )
    );
}