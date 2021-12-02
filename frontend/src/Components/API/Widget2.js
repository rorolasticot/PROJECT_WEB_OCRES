import React from "react";


const API_URL = "https://api.covid19tracking.narrativa.com/api/2021-11-25/country/France";


export default class Widget2 extends React.Component {

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

                <div className="container">
                    <article>
                        <h3 className="titreCles"> Depuis le début de l'épidémie en {this.state.post.name} </h3>
                        <header>
                            <p className="nbrCas">Nombre de cas:</p>
                            <p className="nbrDeces">Nombre de décès:</p>
                        </header>
                        <div className="row">
                            <p className="chiffreCas">{this.state.post.today_new_confirmed}</p>
                            <p className="chiffreCas">{this.state.post.today_new_deaths}</p>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}







