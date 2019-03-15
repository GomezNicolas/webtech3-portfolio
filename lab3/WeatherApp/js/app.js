class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY; //API key toekennen aan huidig gestarte object
        this.initialize(); //functie aanroepen om de app op te starten (die we verderop uitschrijven)
    }

    //functie die wij maken om app op te starten
    initialize(){
        
        //HTML5 geolocation API (zie Mozilla MDN resources)
        this.getMyLocation();
    }

    getMyLocation(){
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);
        }, err => {
            console.log(err);
        } );
    }

    getWeather(lat, lng){
        //AJAX API CALL
        //opbouwen met backticks zodat je makkelijker je parameters kan invoegen in de URL
        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
        //als fetchen lukt dan ("then") willen we de response terugkrijgen in JSON.
        .then(response => {
            return response.json(); //proberen parsen in JSON en teruggeven via return
        })
        //als dat lukt dan ("then") iets doen met die JSON
        .then(json => {
            //find h2 and h3 for weather description and temperature and fill in the data into innerHTML
            let summary = document.querySelector(".weather-description");
            summary.innerHTML = `Current Weather: <span>${json.currently.summary}</span>`;
            let temp = document.querySelector(".temperature");
            let roundedTemp = Math.round(json.currently.temperature);
            temp.innerHTML = `${roundedTemp} °C`;
        })
    }
}

let app = new Weather('6c8db87a5cad6ff776ad9d85d14e54aa');