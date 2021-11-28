import React from "react";

const API_URL = 'https://api.covid19tracking.narrativa.com/api/2021-11-14/country/France';

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

                console.log(result.dates["2021-11-14"].countries.France.today_confirmed)
                this.setState({ post: result })

            })
    }




    render() {
        return (
            <div>


                {/* {this.state.post.dates["2021-11-14"].countries.France.today_confirmed} */}


            </div>



        );
    }
}







