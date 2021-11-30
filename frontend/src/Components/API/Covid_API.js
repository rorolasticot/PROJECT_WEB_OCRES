import React from "react";
import SearchBar from "../SearchBar";

const API_URL = "https://api.covid19tracking.narrativa.com/api/2021-11-25/country/France";


export default class Widget1 extends React.Component {

    constructor(props, country) {
        super(props);
        this.country = country;
        this.state = {
            post: [],
        };
    }
    // Faire la requete à l'API openweathermap
    // Retourne une promise
    async componentDidMount() {
        // const url = API_URL.concat("", this.country);
        // console.log(url);
        // console.log(this.country);
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        this.setState({ post: data.dates["2021-11-25"].countries.France })
    }
    render() {
        return (
            <div>
                <SearchBar />
                <div className="container">
                    <article className="NbrCles">
                        <h2> Chiffres Clés : {this.state.post.name} </h2>
                        <header>
                            <p>Nombre de cas depuis le début de l'épidémie :</p>
                            <p>Nombre de décès depuis le début de l'épidémie :</p>
                        </header>
                        <div className="row">
                            <p>{this.state.post.today_confirmed}</p>
                            <p>{this.state.post.today_deaths}</p>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}







