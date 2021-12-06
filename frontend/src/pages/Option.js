import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation';
import Axios from 'axios';
import "./Option.css";
const Option = () => {
    const [precautioname, setprecautioname] = useState("");
    const [description, setdescription] = useState("");
    const [precautions, setPrecautions] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3002/read').then((response) => {
            console.log(response);
            setPrecautions(response.data);
        })
    }, [])


    //Ajouter    
    const addToList = () => {
        Axios.post("http://localhost:3002/insert", {

            precautioname: precautioname,
            description: description,
        });
        console.log(precautioname + description);
    };
    //Supprimer
    const deletePrecaution = (id) => {
        Axios.delete(`http://localhost:3002/delete/${id}`)
    };

    return (
        <div>
            <Navigation />
            <div className="option">
                <form className="containerPut">
                    <div className="column">
                        <div className="titre">Ajouter une précaution à prendre</div>

                        {/* NAME INPUT */}
                        <label className="text"> name </label>

                        <input type="text" onChange={(event) => {
                            setprecautioname(event.target.value);
                        }} />

                        {/* DESCRIPTION INPUT */}
                        <label className="text">description</label>

                        <input type="text" onChange={(event) => {
                            setdescription(event.target.value);
                        }} />

                        {/* BOUTON QUI AJOUTE UNE NOUVELLE PRECAUTION AVEC ADD TO LIST A LA BDD */}
                        <button onClick={addToList}>Add to list</button>
                    </div>
                </form>
            </div>
            <div className="list">
                {precautions.map((val, key) => {
                    return (
                        <div key={key} className="prescriptions">
                            <h3>{val.precautioname}</h3>
                            <p>{val.description}</p> {" "}
                            <button onClick={() => deletePrecaution(val._id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}
export default Option;