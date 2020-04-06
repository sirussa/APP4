
var app = {
	// Application Constructor
	initialize: function () {

		function onError() {
			console.log('Error al inicio');
		}

		navigator.accelerometer.watchAcceleration(this.onSuccess, onError, { frequecy: 10000 });
	},


	onSuccess: function (datosAcelerador) {
		app.representaValores(datosAcelerador);
		app.detectaAgitacion(datosAcelerador);
		
	},

	detectaAgitacion: function (datos) {
		var ax = datos.x > 10 || datos.x < -10;
		var ay = datos.y > 10 || datos.y < -10;

		 if (ay || ax) {
			document.body.className = 'agitado';}
	 else {
		document.body.className = '';
		}
	},

	representaValores: function (datosAcelerador) {
		app.representa(datosAcelerador.x, '#valorx');
		app.representa(datosAcelerador.y, '#valory');
		app.representa(datosAcelerador.z, '#valorz');
	},

	representa: function (dato, elemento) {
		document.querySelector(elemento).innerHTML = dato.toFixed('2');
	}

};

if ('addEventListener' in document) {

	document.addEventListener('deviceready', function () {
		app.initialize();
	}, false);
}