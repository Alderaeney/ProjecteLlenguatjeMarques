function dta() {
    let data = new Date()
    let rellotge = document.getElementById('rellotge')
    let dia = data.getDate()
    let any = data.getFullYear()
    let dies = Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
    let mesos = Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
    let segons = data.getSeconds()
    if (segons < 10) {
        segons = "0" + segons
    }
    let minutos = data.getMinutes();
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    let horas = data.getHours()
    if (horas < 10) {
        horas = "0" + horas
    }
    let temps = dies[data.getDay()] + ", " + dia + " from " + mesos[data.getMonth()] + " " + any + "<br>" + horas + ":" + minutos + ":" + segons;
    rellotge.innerHTML = "<h3>" + temps + "</h3>";
}

window.onload = dta;


let temporitzador = setInterval(dta, 1000)