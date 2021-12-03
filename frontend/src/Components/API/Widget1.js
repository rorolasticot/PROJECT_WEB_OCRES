import React from "react";
import SearchBar from "../SearchBar";

//const API_URL =("https://api.covid19tracking.narrativa.com/api/2021-11-25/country/France");

export default class Widget1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            error: "",
            country: undefined
        };
    }
    componentDidMount() {
        this.search();
    }
    search = async () => {
        // if (country === "") country = "France"; //Pays par défaut

        // I cleaned up your url using a template literal
        const url = `https://api.covid19tracking.narrativa.com/api/2021-11-25/country/${this.state.country}`;

        try {
            if (this.state.country) {
                const response = await fetch(url); //Fais une requête
                const data = await response.json(); //fichier .json avec les résultats de la requête

                // Check if the returned country is the correct country that was searched
                if (
                    Object.keys(
                        data.dates["2021-11-25"].countries
                    )[0].toLocaleLowerCase() === this.state.country.toLowerCase()
                ) {
                    // If it is, then set your post state to the values (at index 0 since were comparing to the key at index 0)
                    this.setState({
                        post: Object.values(data.dates["2021-11-25"].countries)[0],
                        error: ""
                    });
                } else {
                    // If not then reset your post state and set an error message
                    this.setState({
                        post: {},
                        error: "Please enter a country name"
                    });
                }
            }
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                // this.setState({
                //   post: [],
                //   error: err.response.data.message
                // });
            }
        }
    };
    // GetListCountry = async (array) => {
    //     const url = "https://api.covid19tracking.narrativa.com/api/countries";
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     const array = data.countries
    // }
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