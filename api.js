

// fetch('https://api.openweathermap.org/data/2.5/weather?lat={-24.1885427}&lon={-65.2738348}&appid={66c91884a6930da951172af85a65d322}')
// .then(Response => Response.json())
// .then(json => console.log(json))


let temperaturaValor = document.getElementById('temperatura-valor')  
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
    
    let ubicacion = document.getElementById('ubicacion')  
    let iconoAnimado = document.getElementById('icono-animado') 

    let vientoVelocidad = document.getElementById('viento-velocidad') 


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '975af6935emshb4bb60b0dbff540p1d4076jsn7f432dcecfdc',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=-24.1885427&lon=-65.2738348&units=metric&lang=es', options)
	.then(response => response.json())
	.then(data => {
       
        console.log(data.data[0])
        let temp = Math.round(data.data[0].temp)
       // console.log(temp)
        temperaturaValor.textContent = `${temp} ° C`

        //console.log(data.weather[0].description)
        let desc = data.data[0].weather.description
        temperaturaDescripcion.textContent = desc.toUpperCase()
        ubicacion.textContent = data.city_name
        
        vientoVelocidad.textContent = `${data.data[0].wind_spd} m/s`
        
        //para iconos estáticos
        //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
        //icono.src = urlIcon
        //console.log(data.weather[0].icon)

        //para iconos dinámicos
        console.log(data.weather[0].main)
        switch (data.weather[0].main) {
            case 'Thunderstorm with rain':
              iconoAnimado.src='animated/thunder.svg'
              console.log('TORMENTA');
              break;
            case 'Drizzle':
              iconoAnimado.src='animated/rainy-2.svg'
              console.log('LLOVIZNA');
              break;
            case 'Light Rain':
              iconoAnimado.src='animated/rainy-7.svg'
              console.log('LLUVIA');
              break;
            case 'Snow':
              iconoAnimado.src='animated/snowy-6.svg'
                console.log('NIEVE');
              break;                        
            case 'Clear sky':
                iconoAnimado.src='animated/day.svg'
                console.log('LIMPIO');
              break;
            case 'Atmosphere':
              iconoAnimado.src='animated/weather.svg'
                console.log('ATMOSFERA');
                break;  
            case 'Overcast clouds':
                iconoAnimado.src='animated/cloudy-day-1.svg'
                console.log('NUBES');
                break;  
            default:
              iconoAnimado.src='animated/cloudy-day-1.svg'
              console.log('por defecto');
          }

       


    })
	.catch(err => console.error(err));






    
let boton = document.getElementById('enviar');
    
boton.addEventListener('click', onClick);

function cleanForm(){
    let formulario = document.getElementById('formulario');
        formulario.reset();
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
