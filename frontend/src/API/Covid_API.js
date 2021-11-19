// API : https://openweathermap.org/api
/*import axios from 'axios';
// Url API
const API_URL = "https://api.covid19tracking.narrativa.com/api/";

class Covid_API {
  constructor(country, region, city) {
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if (city === undefined) {
      city = "paris";
    }
    if (country === undefined) {
      country = "France";
    }
    this.country = country;
    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  GetInfoByCountry() {
    return axios.get(`${API_URL}${this.country}`, {
      crossdomain: true
    })
  }
}*/