const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	cargo: /^[A-Z]{4,100}$/,
	nom_ape: /^[A-Z]{4,100}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
    telefono: /^\d{9}$/, // 7 a 14 numeros.
    destino: /^[a-zA-Z]|\s$/,
    coste: /^(10[1-9]|1[1-9]\d|[2-9]\d\d|1000|100)$/,
    alquiler: /^(10[1-9]|1[1-9]\d|[2-5]\d\d|600|100)$/,
    comidas: /^\d$/
}

const campos = {
	cargo: false,
    nombre: false,
    pApellido: false,
    sApellido: false,
	correo: false,
    telefono: false,
    destino: false,
    coste: false,
    alquiler: false,
    comidas: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "cargo":
			validarCampo(expresiones.cargo, e.target, 'cargo');
		break;
		case "nombre":
			validarCampo(expresiones.nom_ape, e.target, 'nombre');
		break;
		case "pApellido":
			validarCampo(expresiones.nom_ape, e.target, 'pApellido');
		break;
		case "sApellido":
            validarCampo(expresiones.nom_ape, e.target, 'sApellido');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "destino":
			validarCampo(expresiones.destino, e.target, 'destino');
        break;
        case "coste":
			validarCampo(expresiones.coste, e.target, 'coste');
        break;
        case "alquiler":
			validarCampo(expresiones.alquiler, e.target, 'alquiler');
        break;
        case "comidas":
			validarCampo(expresiones.comidas, e.target, 'comidas');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if(campos.cargo && campos.nombre && campos.pApellido && campos.sApellido && campos.correo && campos.telefono && campos.destino && campos.coste && campos.alquiler && campos.comidas ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 3000);

	}else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});