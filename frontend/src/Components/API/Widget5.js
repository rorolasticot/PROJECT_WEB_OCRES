import React from "react";
import { AreaChart } from "recharts";

import { CartesianGrid } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { Tooltip } from "recharts";
import { Area } from "recharts";

const MONTHS = [

    "janvier",
    "fevrier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "decembre"
];

export default class Widget5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            janvier: [],
            fevrier: [],
            mars: [],
            avril: [],
            mai: [],
            juin: [],
            juillet: [],
            aout: [],
            septembre: [],
            octobre: [],
            novembre: [],
            decembre: []
        };
    }

    getData = async () => {
        MONTHS.map(async (month, index) => {
            var url = "";
            var date = "";
            if (index + 1 < 10) {
                url = `https://api.covid19tracking.narrativa.com/api/2021-0${index + 1}-01/country/France`;
                date = `2021-0${index + 1}-01`;
            }
            else {
                url = `https://api.covid19tracking.narrativa.com/api/2021-${index + 1}-01/country/France`;
                date = `2021-${index + 1}-01`;
            }
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ [month]: data.dates[date].countries.France })
        })
    }

    async componentDidMount() {
        this.getData();
    }

    render() {
        var data = [
            {
                "name": "Janvier",
                "décès": this.state.janvier.today_deaths

            },
            {
                "name": "Février",
                "décès": this.state.fevrier.today_deaths

            },
            {
                "name": "Mars",
                "décès": this.state.mars.today_deaths

            },
            {
                "name": "Avril",
                "décès": this.state.avril.today_deaths

            },
            {
                "name": "Mai",
                "décès": this.state.mai.today_deaths

            },
            {
                "name": "Juin",
                "décès": this.state.juin.today_deaths
            },
            {
                "name": "Juillet",
                "décès": this.state.juillet.today_deaths
            },
            {
                "name": "Aout",
                "décès": this.state.aout.today_deaths
            },
            {
                "name": "Septembre",
                "décès": this.state.septembre.today_deaths
            },
            {
                "name": "Octobre",
                "décès": this.state.octobre.today_deaths
            },
            {
                "name": "Novembre",
                "décès": this.state.novembre.today_deaths
            },
            {
                "name": "Décembre",
                "décès": this.state.decembre.today_deaths

            }
        ];
        return (
            <div>
                <div className="containerGraph">
                    <div className="titre">Evolution du nombre de décès par mois en 2021</div>
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