import React from "react";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
    }
    render() {
        return (
            <div>
                <form
                    className="form-container"
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <input
                        id="country-input"
                        type="text"
                        className="form-control"
                        placeholder="Rentrer le nom d'un pays"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <div>
                        <button
                            id="country-input-button"
                            className="btn btn-success"
                            type="submit"
                        >
                            Actualiser
                        </button>
                    </div>
                </form>
            </div>
        );
    }
    handleChange = (e) => {
        this.props.getCountryCall(e.target.value);     //Pass the data back to Widget1 each time the user types
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.search();
    };
}
