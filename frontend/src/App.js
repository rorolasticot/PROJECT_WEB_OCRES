
import React, { Component } from 'react';
import './App.css';
import './API/script.js';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countryName: null,
      stats: {}
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.getCountryId()
    console.log(this.state.countryName)
  }

  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_");
    if (replace.length > 0) {
      this.setState({ countryName: replace })
    } else {
      alert("Please type country name!")
    }
  }
  getCountryId() {
    console.log(`https://api.covid19tracking.narrativa.com/api/2021-11-14/country/${this.state.countryName}`);
    axios.get(`https://api.covid19tracking.narrativa.com/api/2021-11-14/country/${this.state.countryName}`)
      .then(async res => {
        console.log(res.data);
        if (res.data === undefined) {
          alert("This player is either injured or hasn't played yet!")
        } else if (res.data.length > 1) {
          alert("Pleases specify the name more!")
        }
      }).catch(e => {
        console.log(e)
      })
  }

  componentDidMount() {
    this.getCountryId()
  }

  render() {
    return (
      <div className="App" >
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom de pays
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Veuillez rentrer un nom de pays" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default App;
