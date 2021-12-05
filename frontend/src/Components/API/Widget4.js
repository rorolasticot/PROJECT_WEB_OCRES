import React from "react";


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
        this.setState({ post: data.dates["2021-11-25"].countries.France })
    }
    render() {
        return (
            <div className="row">

                <div className="petitcontainer">
                    <div className="column">
                        <div className="nbrDomicil">{this.state.post.today_recovered}</div>
                        <div className="nbrDomiciltoday">+{this.state.post.today_new_recovered}</div>
                        <div className="nbrDomiciltoday">Retour à domicile</div>
                    </div>
                </div>

            </div >
        );
    }
}







