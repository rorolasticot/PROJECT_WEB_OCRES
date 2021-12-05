import React, { useState, useEffect } from "react";
import Axios from "axios";


function Widget6() {
    const [dispositions, setDispositions] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((response) => {
            console.log(response);
            setDispositions(response.data);
        })
    }, [])

    return (
        <div className="widget6">
            {dispositions.map((val, key) => (

                <tr key={`list-elem-${key}`}>
                    <th className="region" scope="row"> {val.precautioname}</th>
                    <td className="cas"> <p className="ecris">{val.description}</p></td>
                    <td className="deces"> <p className="ecris">{val.image}</p></td>
                </tr>
            ))};

        </div>
    );



}
export default Widget6;