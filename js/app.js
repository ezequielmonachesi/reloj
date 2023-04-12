function obtenerFecha(){

    let fecha = document.querySelector('#fecha');
    let hora = document.querySelector('#hora');
let fechaAcutal = new Date();

// Array de días de la semana
const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
// Array de meses
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

fecha.innerHTML = `${daysOfWeek[fechaAcutal.getDay()]} ${fechaAcutal.getDate()} de ${months[fechaAcutal.getMonth()]} del ${fechaAcutal.getFullYear()}`;
let segundos = 0;
if(fechaAcutal.getSeconds()<10){
    segundos ='0'+fechaAcutal.getSeconds();
}else{
    segundos =fechaAcutal.getSeconds();
}

hora.innerHTML = `${fechaAcutal.getHours()}:${fechaAcutal.getMinutes()}:${segundos}`

}
setInterval(obtenerFecha, 1000)

// Martes 11 de Abril del 2023
// 10:35:00