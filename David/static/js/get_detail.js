// get_detail.js

function getDetail(email) {
    var request = new XMLHttpRequest();
    // request.open('GET', 'http://localhost:8000/contactos/' + encodeURIComponent(email));
    request.open('GET', 'https://api-contactos-91f205878f2d.herokuapp.com/contactos/' + encodeURIComponent(email));
    request.send();

    request.onload = (e) => {
        if (request.status === 200) {
            const response = request.responseText;
            const contacto = JSON.parse(response);

            var detallesContacto = document.getElementById("detalles_contacto");

            // Crear elementos para mostrar la información del contacto
            var pEmail = document.createElement("p");
            var pNombre = document.createElement("p");
            var pTelefono = document.createElement("p");

            pEmail.innerText = "Email: " + contacto.email;
            pNombre.innerText = "Nombre: " + contacto.nombre;
            pTelefono.innerText = "Teléfono: " + contacto.telefono;

            // Agregar los elementos al contenedor
            detallesContacto.appendChild(pEmail);
            detallesContacto.appendChild(pNombre);
            detallesContacto.appendChild(pTelefono);

        } else {
            console.log("Error al obtener detalles del contacto.");
        }
    };
}

