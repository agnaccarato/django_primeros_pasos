class ClienteClima {
    latitud = -34.6086962;
    longitud = -58.4321655;
    apiKey = '6f24a0bb8359153e01463645d45b4bbd';
    //obtiene coordenadas
    constructor() {
        if (navigator.geolocation) {
            self = this;
            var actualizarPosicion = function (position) {
                self.latitud = position.coords.latitude;
                self.longitud = position.coords.longitude;
            };
            navigator.geolocation.getCurrentPosition(actualizarPosicion, function (msg) {
                console.error(msg);
            });
        }

    };

    obtenerClima = function () {

        var url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitud}&lon=${this.longitud}&appid=${this.apiKey}&units=metric&lang=sp`;
        // Create an XMLHttpRequest object
        const xhttp = new XMLHttpRequest();

        // Define a callback function
        xhttp.onload = function () {
            const climaActual = JSON.parse(this.response);
            var iconurl = "http://openweathermap.org/img/w/" + climaActual.weather[0].icon + ".png";
            document.getElementById('wicon').setAttribute('src', iconurl);
            document.getElementById('climaActual').innerHTML = climaActual.weather[0].description;
            document.getElementById('temperatura').innerHTML = climaActual.main.temp;
            if (climaActual.main.temp <= 15) {
                document.getElementById('sug1').setAttribute('src', "sopa.jpg");
                document.getElementById('sug2').setAttribute('src', "guiso.jpg");
                document.getElementById('sug5').setAttribute('src', "tortaChoco.jpg");
                document.getElementById('sug4').setAttribute('src', "appleCru.jpg");
                document.getElementById('sug3').setAttribute('src', "fondue.jpg");
             
            }
            else if (climaActual.main.temp >= 25) {
                document.getElementById('sug2').setAttribute('src', "poke.jpg");
                document.getElementById('sug3').setAttribute('src', "tomateRelleno.jpg");
                document.getElementById('sug4').setAttribute('src', "jugos.jpg");
                document.getElementById('sug1').setAttribute('src', "wrap.jpg");
                document.getElementById('sug5').setAttribute('src', "yogur.jpg");
              
            }

            else {
                document.getElementById('sug4').setAttribute('src', "tarta.jpg");
                document.getElementById('sug2').setAttribute('src', "milas.jpg");
                document.getElementById('sug3').setAttribute('src', "postrelight.jpg");
                document.getElementById('sug1').setAttribute('src', "tortillapapa.jpg");
                document.getElementById('sug5').setAttribute('src', "omellet.jpg");
           
            }
        }
        // Send a request
        xhttp.open("GET", url);
        xhttp.send();


    }

}

clienteClima = new ClienteClima();
document.body.onload = function () {
    clienteClima.obtenerClima()

};

/////////////////////////sugerencias comida/////////////////////////////////



