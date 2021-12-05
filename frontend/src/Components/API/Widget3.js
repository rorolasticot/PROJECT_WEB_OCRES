import React from "react";

export default class Widget3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            region: [],
            country: "France"
        };
    }

    async componentDidMount() {
        this.search();
    }

    search = async () => {
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
                        region: Object.values(data.dates[date].countries)[0].regions,
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
        return (
            <div className="Tableau">
                <table>
                    <tbody>
                        <tr>
                            <th className="region" scope="col">Région</th>
                            <th className="cas" scope="col">Nombre de cas</th>
                            <th className="deces" scope="col">Nombre de décès</th>
                        </tr>

                        {this.state.region.map((regions, index) => (
                            <tr key={`list-elem-${index}`}>
                                <th className="region" scope="row"> {regions.name}</th>
                                <td className="cas"> <p className="ecris">{regions.today_confirmed}</p><p className="today">+{regions.today_new_confirmed}</p></td>
                                <td className="deces"> <p className="ecris">{regions.today_deaths}</p><p className="today">+{regions.today_new_deaths}</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );

    }

}

