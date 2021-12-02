import React from "react";
import { AreaChart } from "recharts";

import { CartesianGrid } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { Tooltip } from "recharts";
import { Area } from "recharts";


const MARS = "https://api.covid19tracking.narrativa.com/api/2021-03-01/country/France";
const AVRIL = "https://api.covid19tracking.narrativa.com/api/2021-04-01/country/France";
const MAI = "https://api.covid19tracking.narrativa.com/api/2021-05-01/country/France";
const JUIN = "https://api.covid19tracking.narrativa.com/api/2021-06-01/country/France";
const JUILLET = "https://api.covid19tracking.narrativa.com/api/2021-07-01/country/France";
const AOUT = "https://api.covid19tracking.narrativa.com/api/2021-08-01/country/France";
const SEPTEMBRE = "https://api.covid19tracking.narrativa.com/api/2021-09-01/country/France";
const OCTOBRE = "https://api.covid19tracking.narrativa.com/api/2021-10-01/country/France";
const NOVEMBRE = "https://api.covid19tracking.narrativa.com/api/2021-11-01/country/France";



export default class Widget5 extends React.Component {
    constructor(props, country) {
        super(props);
        this.country = country;
        this.state = {
            mars: [],
            avril: [],
            mai: [],
            juin: [],
            juillet: [],
            aout: [],
            septembre: [],
            octobre: [],
            novembre: [],

        };
    }
    // Faire la requete à l'API openweathermap
    // Retourne une promise
    async componentDidMount() {
        // const url = API_URL.concat("", this.country);
        // console.log(url);
        // console.log(this.country);
        const response = await fetch(MARS);
        const data = await response.json();
        console.log(data);


        this.setState({ mars: data.dates["2021-03-01"].countries.France })

        const mois1 = await fetch(AVRIL);
        const m1 = await mois1.json();
        console.log(m1);


        this.setState({ avril: m1.dates["2021-04-01"].countries.France })

        const mois2 = await fetch(MAI);
        const m2 = await mois2.json();
        console.log(m2);


        this.setState({ mai: m2.dates["2021-05-01"].countries.France })

        const mois3 = await fetch(JUIN);
        const m3 = await mois3.json();
        console.log(m3);


        this.setState({ juin: m3.dates["2021-06-01"].countries.France })

        const mois4 = await fetch(JUILLET);
        const m4 = await mois4.json();
        console.log(m4);


        this.setState({ juillet: m4.dates["2021-07-01"].countries.France })

        const mois5 = await fetch(AOUT);
        const m5 = await mois5.json();
        console.log(m5);


        this.setState({ aout: m5.dates["2021-08-01"].countries.France })

        const mois6 = await fetch(SEPTEMBRE);
        const m6 = await mois6.json();
        console.log(m6);


        this.setState({ septembre: m6.dates["2021-09-01"].countries.France })

        const mois7 = await fetch(OCTOBRE);
        const m7 = await mois7.json();
        console.log(m7);


        this.setState({ octobre: m7.dates["2021-10-01"].countries.France })

        const mois8 = await fetch(NOVEMBRE);
        const m8 = await mois8.json();
        console.log(m8);


        this.setState({ novembre: m8.dates["2021-11-01"].countries.France })





    }

    render() {


        var data = [
            {
                "name": "Mars",
                "décès": 4000

            },
            {
                "name": "Avril",
                "décès": 3000

            },
            {
                "name": "Mai",
                "décès": 2000

            },
            {
                "name": "Juin",
                "décès": 2780
            },
            {
                "name": "Juillet",
                "décès": 1890
            },
            {
                "name": "Aout",
                "décès": 2390
            },
            {
                "name": "Septembre",
                "décès": 3490
            },
            {
                "name": "Octobre",
                "décès": 3490
            },
            {
                "name": "Novembre",
                "décès": 3490
            }
        ];
        data[0].décès = this.state.mars.today_deaths

        data[1].décès = this.state.avril.today_deaths
        data[2].décès = this.state.mai.today_deaths
        data[3].décès = this.state.juin.today_deaths
        data[4].décès = this.state.juillet.today_deaths
        data[5].décès = this.state.aout.today_deaths
        data[6].décès = this.state.septembre.today_deaths
        data[7].décès = this.state.octobre.today_deaths
        data[8].décès = this.state.novembre.today_deaths
        return (
            <div>
                <div className="containerGraph">
                    <h1> TITRE </h1>
                    <AreaChart width={800} height={250} data={data}
                        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4D5FA0" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="4D5FA0" stopOpacity={0} />
                            </linearGradient>

                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="0.2 0.2" />
                        <Tooltip />
                        <Area type="monotone" dataKey="décès" stroke="//#endregion4D5FA0" fillOpacity={1} fill="url(#colorUv)" />

                    </AreaChart>


                </div>
            </div>
        );
    }
}







