import React from "react";


const API_URL = "https://api.covid19tracking.narrativa.com/api/2021-11-25/country/France";


export default class Widget3 extends React.Component {

    constructor(props, country) {
        super(props);
        this.country = country;
        this.state = {
            region: [],
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
        this.setState({ region: data.dates["2021-11-25"].countries.France.regions })
    }
    render() {
        return (
            <div className="Tableau">
                <table>
                    <header>
                        <tr>
                            <th className="ville">Villes</th>
                            <th className="cas">Nombre de cas</th>
                            <th className="deces">Nombre de décès</th>
                        </tr>
                    </header>
                    {this.state.region.map((regions, index) => (
                        <div key={`list-elem-${index}`}>
                            <tr>
                                <td className="ville"> {regions.name}</td>
                                <td className="cas"> <p className="ecris">{regions.today_confirmed}</p><p className="today">+{regions.today_new_confirmed}</p></td>
                                <td className="deces"> <p className="ecris">{regions.today_deaths}</p><p className="today">+{regions.today_new_deaths}</p></td>
                            </tr>
                        </div>
                    ))}
                </table>
            </div>
        );

    }

}

