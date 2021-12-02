import React from "react";

const API_URL = "https://api.covid19tracking.narrativa.com/api/2021-11-25/country/France";



const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300
    }
]
export default class Widget5 extends React.Component {


    render() {
        var tableau = [{
            "name": "Mars",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Avril",
            "uv": 3000,
            "pv": 1398
        },
        ];
        tableau[0].uv = this.state.post;
        return (
            <div>

                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>



            </div>
        );
    }
}







