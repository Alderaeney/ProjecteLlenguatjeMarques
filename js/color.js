function tecla(eventList) {
    if ((eventList.keyCode == 67) && (eventList.ctrlKey)) {
        document.getElementsByTagName('body')[0].style.backgroundColor="rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
    }
}

document.onkeydown = tecla;