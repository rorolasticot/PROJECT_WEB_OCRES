/*import './Covid_API.js';
// Fonction appelée lors du click du bouton
function start(country) {
    console.info(country)
    // Création de l'objet apiWeather
    const CovidAPI = new CovidAPI(country);
    // Appel de la fonction fetchTodayForecast

    CovidAPI
        .GetInfoByCountry()
        .then(function (response) {
            // Récupère la donnée d'une API
            const data = response.data.list;
            console.log(data)
            /*data.map((d, i) => {
              // On récupère l'information principal
              const main = d.weather[0].main;
              const description = d.weather[0].description;
              const temp = d.temp.min;
              const icon = apiWeather.getHTMLElementFromIcon(d.weather[0].icon);
              // Modifier le DOM
              document.getElementById(`d${i}-forecast-main`).innerHTML = main;
              document.getElementById(`d${i}-forecast-more-info`).innerHTML = description;
              document.getElementById(`d${i}-icon-weather-container`).innerHTML = icon;
              document.getElementById(`d${i}-forecast-temp`).innerHTML = `${temp}°C`;
            })*/
/* })
 .catch(function (error) {
     // Affiche une erreur
     console.error(error);
 });
}*/
