import React from "react";

const API_URL = 'https://disease.sh/v3/covid-19/countries/france';

export default class Widget1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: [],
        };
    }
    // Faire la requete à l'API openweathermap
    // Retourne une promise
    componentDidMount() {
        fetch(API_URL)

            .then((response) => {
                return response.json()
            })
            .then((result) => {
                console.log(result)


                this.setState({ post: result })

            })
    }




    render() {
        return (

            <article className="NbrCles">

                <header className="ChiffreCles"> Chiffres Clés </header>
                <ul>
                    <li className="NbrCas">Nombre de Cas</li>
                    <li className="NbrDeces">Nombre de décés</li>
                </ul>
                <ul>
                    <li className="ChiffreCas">{this.state.post.cases}</li>
                    <li className="ChiffreCas">{this.state.post.deaths}</li>
                </ul>

                {/* <p className="ChiffreCas">{this.state.post.cases}</p>
                <p className="ChiffreCas">{this.state.post.deaths}</p> */}



            </article>



        );
    }
}







