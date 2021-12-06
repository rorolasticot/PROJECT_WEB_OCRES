import React from "react";
import "./Widget2.css";

export default class Widget2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            post1: {},
            post2: {},
            error: "",
            country: "France",
        };
    }
    async componentDidMount() {
        this.search();
    }
    search = async () => {

        const response = await fetch("https://covid.ourworldindata.org/data/latest/owid-covid-latest.json");
        var data = await response.json();
        for (var i = 0; i < Object.values(data).length; i++) {
            if (this.state.country === Object.values(data)[i].location) {
                this.setState({
                    post1: Object.values(data)[i]
                })
            }
        }
        const current = new Date(); //Pour récupérer la date d'aujourd'hui
        var date = `${current.getFullYear()}-${current.getMonth() + 1}-`; //On lui donne le format souhaité YYYY-MM-DD et on recule de qulques jours pour avoir des données plus pertinentes
        if (current.getDate() - 3 < 10) { date = date + `0${current.getDate() - 3}`; }
        else { date = date + `${current.getDate() - 3}`; }
        const url = `https://api.covid19tracking.narrativa.com/api/${date}/country/${this.state.country}`;
        try {
            if (this.state.country) {
                const response = await fetch(url);
                const data = await response.json();
                if (Object.keys(data.dates[date].countries)[0]
                    .toLocaleLowerCase() === this.state.country.toLowerCase() || this.state.country === "France") {

                    this.setState({
                        post2: Object.values(data.dates[date].countries)[0],
                        error: ""
                    });
                }
                else {
                    // Sinon on reset le state et on envoie un message d'erreur
                    this.setState({
                        post: {},
                        error: "Please enter a country name"
                    });
                }
            }
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
            }
        }
    }
    render() {
        if (this.state.error !== undefined && this.state.post !== []) {
            return (
                <div className="widget2">
                    <div className="row">
                        <div className="petitcontainer">
                            <div className="column">
                                <div className="nbrVaccine">{this.state.post1.people_fully_vaccinated}</div>
                                <div className="nbrVaccineToday">+{this.state.post1.new_vaccinations_smoothed}</div>
                                <div className="nbrVaccineToday">Nombre de vaccinés (2 ou 3 doses)</div>
                            </div>
                        </div>
                        <div className="petitcontainer">
                            <div className="column">
                                <div className="nbrDomicil">{this.state.post2.today_recovered}</div>
                                <div className="nbrDomiciltoday">+{this.state.post2.today_new_recovered}</div>
                                <div className="nbrDomiciltoday">Retour à domicile</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="error">{this.state.error}</div>
                </div>
            );
        }
    }
}
