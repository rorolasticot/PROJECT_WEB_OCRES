import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }
    render() {
        return (
            <div>
                <div className="form-container">
                    <input id="country-input" type="text" className="form-control" placeholder="Rentrer le nom d'un pays" />
                    <div className="input-group-append">
                        <button id="country-input-button" className="btn btn-success" type="submit"
                            onClick={this.props.ComponentDidMount}>Actualiser</button>
                    </div>
                </div>
            </div>
        );
    }
    sayHello() {
        var url = "https://api.covid19tracking.narrativa.com/api/2021-11-25/country/" + document.getElementById("country-input").value;
        console.log(url);
    }
}
export default SearchBar;