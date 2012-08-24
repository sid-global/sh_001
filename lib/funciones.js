/*********************************************************************************************************************************/
/*****                                               FUNCIONES - SEGUROS HORIZONTE                                           *****/
/*****                                                  MÓDULO BASE (23/08/2012)  											 *****/
/*********************************************************************************************************************************/

/* Abre una nueva ventana en la página de SID
 * 20120613 MT
 */
function sid() {
	window.open("http://www.integradores.net");		
}

/* Abre una nueva ventana en la página el url del parámetro
 * 20120820 MT
 */
function abrirPagina() {
	window.open("http://www.seguroshorizonte.gob.ve");			
}

function redirFacebook(){
	window.open("http://www.facebook.com/seguroshorizonteoficial");
}

function redirTwitter() {
	window.open("http:twitter.com/SegHorizonte");
}

function abrirBlogger() {
	window.open("http://www.tuhorizonte.com");
}

/* Función que redirecciona al url pasapa por parámetro
 * 20120613 MT
 */
function redireccionar(url) {
	localStorage.regresar = url;
	window.open(url,"_self");
}


/*********************************************************************************************************************************/
/*****                                               FUNCIONES - SEGUROS HORIZONTE                                           *****/
/*****                                                GEOLOCALIZACIÓN (24/08/2012)  										 *****/
/*********************************************************************************************************************************/
/* Valida que el navegador soporte la golocalización
 * 20120622 MT
 */
function geolocalizacion_usuario() {
    if (navigator.geolocation) {
        obtenerPosicion();
	} else
        alert('Su navegador no soporta esta caracteristica de Html5');
}
 
 
/* Se hace uso de la API de localizacion de html5 y establece las funciones que procesaran los datos
 * 20120622 MT
 */
function obtenerPosicion() {
    navigator.geolocation.getCurrentPosition(coordenada, manejoErrores, {
        enableHighAccuracy: true
    });
}
 
/* Recibe la coordenada y muestra los datos al usuario
 * 20120622 MT
 */
function coordenada(position) {
    var posdata = '';
    posdata += 'Coordenada: ' + position.coords.latitude + ',' + position.coords.longitude + '.\n';
    posdata += 'Precision: ' + position.coords.altitude + ' mts.\n';
    posdata += 'Altitud: ' + position.coords.accuracy + ' mts sobre el nivel del mar.\n';
    posdata += 'Precision de Altitud: ' + position.coords.altitudeAccuracy + ' mts.\n';
    posdata += 'Grados(N): ' + position.coords.heading + '??.\n';
    posdata += 'Velocidad: ' + position.coords.speed + ' mts/seg.\n';
    posdata += 'Tiempo: ' + position.timestamp + '.\n';
	localStorage.latitud =  position.coords.latitude;
	localStorage.longitud = position.coords.longitude;
	document.getElementById('latitud').value = localStorage.latitud;
	document.getElementById('longitud').value = localStorage.longitud;
}
 
/* Manejo de errores de la implementacion de la API
 * 20120622 MT
 */
function manejoErrores(err) {
    switch (err.code) {
    case 0:
        //ERROR DESCONOCIDO
        alert(err.code + ' ERROR DESCONOCIDO: ' + err.message);
        break;
    case 1:
        //PERMISO DENEGADO
        alert(err.code + ' PERMISO DENEGADO: ' + err.message);
        break;
    case 2:
        //POSICION NO DISPONIBLE
        alert(err.code + ' POSICION NO DISPONIBLE: ' + err.message);
        break;
    case 3:
        //TIMEOUT
        alert(err.code + ' TIMEOUT: ' + err.message);
        break;
	default:
		alert('Error al intentar obtener las Coordenadas.');
        break;
    }
}

