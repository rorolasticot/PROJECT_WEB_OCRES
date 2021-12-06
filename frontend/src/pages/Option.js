import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import Axios from 'axios';
const Option = () => {
    const [precautioname, setprecautioname] = useState("");
    const [description, setdescription] = useState("");
    const [image, setimage] = useState("");


    //Ajouter    
    const addToList = () => {
        Axios.post("http://localhost:3002/insert", {

            precautioname: precautioname,
            description: description,
            image: image
        });
        console.log(precautioname + description + image);
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

                        {/* IMAGE URL INPUT */}
                        <label className="text">image</label>

                        <input className="entree" type="text" onChange={(event) => {
                            setimage(event.target.value);
                        }} />

                        {/* BOUTON QUI AJOUTE UNE NOUVELLE PRECAUTION AVEC ADD TO LIST A LA BDD */}
                        <button onClick={addToList}>Add to list</button>
                    </div>
                </form>
            </div>
        </div >



    );
}
export default Option;