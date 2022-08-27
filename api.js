let temperaturaValor = document.getElementById('temperatura-valor')
let temperaturaDescripcion = document.getElementById('temperatura-descripcion')
let ubicacion = document.getElementById('ubicacion')
let iconoAnimado = document.getElementById('icono-animado')
let vientoVelocidad = document.getElementById('viento-velocidad')
let boton = document.getElementById('enviar');
boton.addEventListener('click', onClick);



const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '71b28a92b8mshd6468d7b3b5dde0p146a35jsn62fd8093b04e',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};
fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=-24.1885427&lon=-65.2738348&units=metric&lang=es', options)
  .then(response => response.json())
  .then(data => {
    console.log(data.data[0])
    let temp = Math.round(data.data[0].temp)
    temperaturaValor.textContent = `${temp} ° C`
    let desc = data.data[0].weather.description
    temperaturaDescripcion.textContent = desc.toUpperCase()
    ubicacion.textContent = data.city_name
    vientoVelocidad.textContent = `${data.data[0].wind_spd} m/s`
  })
.catch(err => console.error(err));

function cleanForm() {
  let formulario = document.getElementById('formulario');
  document.getElementById('user').value = "",
  document.getElementById('mail').value = "",
  document.getElementById('phone').value = "",
  document.getElementById('brief').value = ""

}


function onClick(event) {
  event.preventDefault();
  console.log(event)
  const mensaje = {
    user: document.getElementById('user').value,
    mail: document.getElementById('mail').value,
    phone: document.getElementById('phone').value,
    brief: document.getElementById('brief').value,
  }
  console.log(mensaje);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      Swal.fire(
        'Enviado',
        'Gracias por Inscribirte',
        'succes'
      );
      cleanForm();
    })
    .catch((err) => console.log(err));
}
