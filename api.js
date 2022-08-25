

fetch('https://api.openweathermap.org/data/2.5/weather?lat={-24.1885427}&lon={-65.2738348}&appid={73938b87df2d4be8e19bda6eee85d99d}')
.then(Response => Response.json())
.then(json => console.log(json))


let boton = document.getElementById('enviar');
    
boton.addEventListener('click', onClick);

function cleanForm(){
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
