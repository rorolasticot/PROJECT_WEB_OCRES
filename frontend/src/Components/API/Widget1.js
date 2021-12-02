import React from "react";


const API_URL = "https://api.covid19tracking.narrativa.com/api/2021-12-01/country/France";


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
        this.setState({ post: data.dates["2021-12-01"].countries.France })
    }
    render() {
        return (
            <div className="row">

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
    }
}
