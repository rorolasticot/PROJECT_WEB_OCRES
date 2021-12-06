import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Widget6.css";

function Widget6() {
    const [precautions, setPrecautions] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3002/read').then((response) => {
            console.log(response);
            setPrecautions(response.data);
        })
    }, [])

    return (
        <div className="apiContainer">
            <div className="widget6">
                <div className="titre">Gestes barrière</div>
                <table>
                    <tbody>
                        {
                            precautions.map((val, key) => (
                                <tr key={`list-elem-${key}`}>
                                    <th className="region" scope="row"> {val.precautioname}</th>
                                    <td className="cas"> <p className="ecris">{val.description}</p></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );

}
export default Widget6;