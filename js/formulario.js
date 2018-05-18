function texto() {
	let textarea = document.getElementById("message").value;
	let div = document.getElementById("contador");
	div.innerHTML = textarea.length;
}

function lleno(string) {
	if (string == "" || string == 0 || string == null) {
		return false;
	}
	return true;
}

function validar_correo(correo) {
	return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(correo);
}
function acepta_politica(privacidad) {
	return privacidad.checked;
}

function processa(evento) {
	let texto = "";
	let nombre = document.getElementById("name").value;
	let valido = true;
	if (!lleno(nombre)) {
		valido = false;
		texto += "<p>You need to introduce your name.</p>";
	}
	let correo = document.getElementById("email").value;
	if (!validar_correo(correo)) {
		valido = false;
		texto += "<p>Invalid e-mail</p>"
	}
	let textarea = document.getElementById("message").value;
	if (!lleno(textarea)) {
		valido = false;
		texto += "<p>Yo need to introduce a comment in order to send a message</p>";
	}
	let privacidad = document.getElementById("privacy");
	if (!acepta_politica(privacidad)) {
		valido = false;
		texto += "<p>You need to accept our privacy policy in order to continue.</p>"
	}
	if (valido) {
		let esdeveniment = window.event || evento;
		let form = document.getElementById("formulario").action;
		form = "mailto:clase@airmail.cc";
		esdeveniment.target.value = "Enviado";
		//document.getElementById("formulario").submit();
		texto = "<p>Mensaje enviado</p>";
	}
	let div = document.getElementById("error");
	div.innerHTML = texto;
}

function cargar(){
	let textarea = document.getElementById("message");
	textarea.addEventListener("keydown", texto);
	let formulario = document.getElementById("enviar");
	formulario.addEventListener("click", processa);
}

window.addEventListener("load", cargar);
