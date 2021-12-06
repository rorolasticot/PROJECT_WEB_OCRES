import React from "react";
import Papa from "papaparse";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./WidgetMap.css"
import Leaflet from "./Leaflet.js";
import DateSlider from "./DateSlider.js";
import DataSelector from "./DataSelector.js";

const infectedUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
const recoveredUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv";
const deathUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"

export default class WidgetMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infectedData: [],
            deathData: [],
            recoveredData: [],
            date: "1/22/20",
            infectedOn: true,
            deathOn: false,
            recoveredOn: false,
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.toggleInfectedData = this.toggleInfectedData.bind(this);
        this.toggleRecoveredData = this.toggleRecoveredData.bind(this);
        this.toggleDeathData = this.toggleDeathData.bind(this);

    }
    static pullAndParseUrl(url) {
        return axios.get(url).then(response => Papa.parse(response.data, { header: true }));
    }

    componentDidMount() {

        const parsedInfectedData = WidgetMap.pullAndParseUrl(infectedUrl);
        const parsedRecoveredData = WidgetMap.pullAndParseUrl(recoveredUrl);
        const parsedDeathData = WidgetMap.pullAndParseUrl(deathUrl);

        console.log(parsedInfectedData);

        parsedInfectedData.then(result => {
            this.setState({ infectedData: result.data });
        });

        parsedRecoveredData.then(result => {
            this.setState({ recoveredData: result.data });
        });

        parsedDeathData.then(result => {
            this.setState({ deathData: result.data });
        });
    }

    handleDateChange(selectedDate) {
        this.setState({ "date": selectedDate });
    };

    toggleInfectedData() {
        this.setState({ infectedOn: !this.state.infectedOn });
    }

    toggleRecoveredData() {
        this.setState({ recoveredOn: !this.state.recoveredOn });
    }

    toggleDeathData() {
        this.setState({ deathOn: !this.state.deathOn });
    }

    render() {
        return (
            <div className="map">
                <Grid container justify-content="true" alignItems="center" spacing={3}>
                    <Grid item xs={8}>
                        <Typography id="title" variant='h4'>
                            Visualiser les données du covid dans le temps
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Leaflet
                            infectedData={this.state.infectedData}
                            infectedOn={this.state.infectedOn}
                            recoveredData={this.state.recoveredData}
                            recoveredOn={this.state.recoveredOn}
                            deathData={this.state.deathData}
                            deathOn={this.state.deathOn}
                            date={this.state.date}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        {this.state.date}
                        <DateSlider
                            handleDateChange={this.handleDateChange}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <DataSelector
                            toggleInfectedData={this.toggleInfectedData}
                            infectedOn={this.state.infectedOn}
                            toggleRecoveredData={this.toggleRecoveredData}
                            recoveredOn={this.state.recoveredOn}
                            toggleDeathData={this.toggleDeathData}
                            deathOn={this.state.deathOn}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography id="title" variant='caption'>
                            Il s'agit d'une représentation de la propagation de COVID-19 dans le temps. Nous nous basons sur le référentiel de données CSSE de Johns Hopkins, qui est
                            mis à jour une fois par jour vers 23:59 UTC. Pour cette raison, les données les plus récentes que notre curseur permet aux utilisateurs de sélectionner sont celles d'hier.
                            celles d'hier.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}