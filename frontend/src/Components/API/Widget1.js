import React from "react";
import SearchBar from "../SearchBar";

//const API_URL =("https://api.covid19tracking.narrativa.com/api/2021-11-25/country/France");

export default class Widget1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            error: "",
            country: "France",
        };
    }
    componentDidMount() {
        this.search();
    }
    search = async () => {

        const current = new Date();
        var date = `${current.getFullYear()}-${current.getMonth() + 1}-`;
        if (current.getDate() - 3 < 10) { date = date + `0${current.getDate() - 3}`; }
        else { date = date + `${current.getDate() - 3}`; }
        const url = `https://api.covid19tracking.narrativa.com/api/${date}/country/${this.state.country}`;
        try {
            if (this.state.country) {
                const response = await fetch(url); //Fais une requête
                const data = await response.json(); //fichier .json avec les résultats de la requête
                console.log(data.dates[date]);
                // Check si le pays retourné est celui qui est recherché
                if (
                    Object.keys(
                        data.dates[date].countries
                    )[0].toLocaleLowerCase() === this.state.country.toLowerCase() || this.state.country === "France"
                ) {
                    // S'il l'est alors on set le post à la valeur (ici 0 car on compare avec la clef à l'index 0)
                    this.setState({
                        post: Object.values(data.dates[date].countries)[0],
                        error: ""
                    });

                } else {
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

    getCountry = (country_child) => {
        this.setState({ country: country_child });
    };
    render() {
        if (this.state.error !== undefined && this.state.post !== []) {
            return (
                <div className="row">
                    <SearchBar search={this.search}
                        getCountryCall={this.getCountry.bind(this)} />
                    <div className="petitcontainer">
                        <div className="column">
                            <div className="nbrCas">{this.state.post.today_confirmed}</div>
                            <div className="nbrCastoday">+{this.state.post.today_new_confirmed}</div>
                            <div className="nbrCastoday">Nombre de cas</div>
                        </div>
                    </div>
                    <div className="petitcontainer">
                        <div className="column">
                            <div className="nbrDeces">{this.state.post.today_deaths}</div>
                            <div className="nbrDecestoday">+{this.state.post.today_new_deaths}</div>
                            <div className="nbrDecestoday">Nombre de décès</div>
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