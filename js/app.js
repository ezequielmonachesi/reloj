
function obtenerFecha() {
  let fecha = document.querySelector("#fecha");
  let hora = document.querySelector("#hora");
  let fechaAcutal = new Date();

  // Array de días de la semana
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  // Array de meses
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  fecha.innerHTML = `${
    daysOfWeek[fechaAcutal.getDay()]
  } ${fechaAcutal.getDate()} de ${
    months[fechaAcutal.getMonth()]
  } del ${fechaAcutal.getFullYear()}`;
  let segundos = 0;
  if (fechaAcutal.getSeconds() < 10) {
    segundos = "0" + fechaAcutal.getSeconds();
  } else {
    segundos = fechaAcutal.getSeconds();
  }
  let hour = 0;
  let ampm = "";
  if(fechaAcutal.getHours() < 13){
    hour = fechaAcutal.getHours();
    ampm = "am"
  }else if(fechaAcutal.getHours() % 12 === 0){
    hour = fechaAcutal.getHours()%12;
    ampm = "am"
  }
  else{
    hour = fechaAcutal.getHours()%12;
    ampm = "pm"
  }
  hora.innerHTML = `${hour}:${fechaAcutal.getMinutes()}:${segundos} ${ampm}`;
}
setInterval(obtenerFecha, 10);