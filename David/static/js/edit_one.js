function getOnlyDetail(email) {
    var request = new XMLHttpRequest();
    // request.open('GET', 'http://localhost:8000/contactos/' + encodeURIComponent(email));
    request.open('GET', 'https://api-contactos-91f205878f2d.herokuapp.com/contactos/' + encodeURIComponent(email));
    request.send();

    request.onload = (e) => {
        if (request.status === 200) {
            const response = request.responseText;
            const contacto = JSON.parse(response);

            
            showDetails(contacto);
        } else {
            console.log("Error al obtener detalles del contacto.");
        }
    };
}

function showDetails(contacto) {
    // Actualiza el párrafo con el email actual
    document.getElementById("emailActual").value = contacto.email;

    // Rellena los campos del formulario con la información del contacto
    document.getElementById("email").value = contacto.email;
    document.getElementById("nombre").value = contacto.nombre;
    document.getElementById("telefono").value = contacto.telefono;
}

function editOne() {

    var emailActual = document.getElementById("emailActual").value
    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;

    
    var datos = {
        email: email,
        nombre: nombre,
        telefono: telefono
    };

    
    var request = new XMLHttpRequest();
    // request.open('PUT', 'http://localhost:8000/contactos/' + encodeURIComponent(emailActual));
    request.open('PUT', 'https://api-contactos-91f205878f2d.herokuapp.com/contactos/' + encodeURIComponent(emailActual));
    
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(datos));

    request.onload = (e) => {
        if (request.status === 200) {
            console.log("Contacto editado correctamente");
            
            alert("Contacto editado correctamente");
            window.location.href = "/";
        } else if (request.status === 500) {
            console.log("Error: el email ya existe en los registros");
            
            alert("Error: el email ya existe en los registros. Introduce otro email válido.");
        } else {
            console.log("Error al editar el contacto.");
        }
    };
}
