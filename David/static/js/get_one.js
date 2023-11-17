function getOne(email) {
    var request = new XMLHttpRequest();
    // request.open('GET', 'http://localhost:8000/contactos' + email);
    request.open('GET', 'https://api-contactos-91f205878f2d.herokuapp.com/contactos/' + email);
    request.send();

    request.onload = function () {
        if (request.status === 200) {
            const response = request.responseText;
            const json = JSON.parse(response);

            
            const tbody_contactos = document.getElementById('tbody_contactos');
            tbody_contactos.innerHTML = '';

            var tr = document.createElement('tr');
            var td_email = document.createElement('td');
            var td_nombre = document.createElement('td');
            var td_telefono = document.createElement('td');
            var td_acciones = document.createElement("td");

            td_email.innerHTML = json.email;
            td_nombre.innerHTML = json.nombre;
            td_telefono.innerHTML = json.telefono;
            // Enlaces de ver, editar y borrar
            var verLink = document.createElement("a");
            verLink.href = "/ver?email=" + encodeURIComponent(json.email);
            verLink.innerText = "Ver ";

            var editarLink = document.createElement("a");
            editarLink.href = "/editar?email=" + encodeURIComponent(json.email);
            editarLink.innerText = "Editar ";

            var borrarButton = document.createElement("button");
            borrarButton.innerText = "Borrar";
            borrarButton.addEventListener("click", function () {
                deleteOne(json.email);
            });
            
            td_acciones.appendChild(verLink);
            td_acciones.appendChild(editarLink);
            td_acciones.appendChild(borrarButton);

            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);
            tr.appendChild(td_acciones);

            tbody_contactos.appendChild(tr);
        } else {
            console.error('Error al realizar la solicitud: ' + request.status);
        }
    };
}

function deleteOne(email) {
    var confirmacion = confirm("¿Está seguro de eliminar este contacto?");
    if (confirmacion) {
        // Realizar una solicitud POST para eliminar el contacto
        var request = new XMLHttpRequest();
        // request.open('DELETE', 'http://localhost:8000/contactos/' + encodeURIComponent(email));
        request.open('DELETE', 'https://api-contactos-91f205878f2d.herokuapp.com/contactos/' + encodeURIComponent(email));
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();

        request.onload = (e) => {
            if (request.status === 200) {
                console.log("Contacto eliminado correctamente");
                // Actualizar la tabla eliminando la fila del contacto
                deleteRow(email);
            } else {
                console.log("Error al eliminar el contacto.");
            }
        };
    }
}

function deleteRow(email) {
    var tbody_contactos = document.getElementById("tbody_contactos");
    var filas = tbody_contactos.getElementsByTagName("tr");
    
    // Buscar la fila que contiene el contacto con el email especificado y eliminarla
    for (var i = 0; i < filas.length; i++) {
        var celdas = filas[i].getElementsByTagName("td");
        if (celdas.length > 0 && celdas[0].innerHTML === email) {
            tbody_contactos.removeChild(filas[i]);
            break;
        }
    }
}