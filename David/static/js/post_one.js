function postOne() {
    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;

    var requestData = {
        email,
        nombre,
        telefono
    };

    var request = new XMLHttpRequest();
    request.open('POST', 'https://api-contactos-91f205878f2d.herokuapp.com/contactos');
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (request.status === 200) {
            alert("Contacto editado correctamente");
        } else if (request.status === 500) {
            const error = JSON.parse(request.responseText);
            alert("Email ya existente:\n" + error.message);
        }
    };

    request.onerror = function () {
        alert("Error en la solicitud");
    };

    request.send(JSON.stringify(requestData));
}
