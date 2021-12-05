import React from "react";

export default class Widget2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            post: {},
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
                    post: Object.values(data)[i]
                })
            }
        }
        console.log(this.state.post);
    }
    render() {
        if (this.state.error !== undefined && this.state.post !== []) {
            return (
                <div className="widget2">
                    <div className="row">
                        <div className="petitcontainer">
                            <div className="column">
<<<<<<< HEAD
                                <div className="nbrVaccine">{this.state.post.people_fully_vaccinated}</div>
                                <div className="nbrVaccineToday">+{this.state.post.new_vaccinations_smoothed}</div>
                                <div className="nbrVaccineToday">Nombre de vaccinés (2 ou 3 doses)</div>
=======
                                <div className="nbrVaccines">{this.state.post.people_fully_vaccinated}</div>
                                <div className="nbrVaccinesToday">+{this.state.post.new_vaccinations_smoothed}</div>
                                <div className="nbrVaccinesToday">Nombre de vaccinés (2 ou 3 doses)</div>
>>>>>>> fec3ebb9a78cda97fb265980c8e1dde5faf2aedc
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
