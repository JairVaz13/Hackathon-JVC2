function getAll() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8000/empresas');
    //request.open('GET', 'https://api-contactos-91f205878f2d.herokuapp.com/contactos');
    request.send();

    request.onload = function () {
        if (request.status === 202) {
            // La solicitud fue exitosa
            const response = request.responseText;
            const empresas = JSON.parse(response);
            
            // Imprimir el JSON en la consola
            console.log(empresas);
        } else {
            // La solicitud no fue exitosa
            console.log('Error al cargar las empresas. Estado de la solicitud:', request.status);
        }
    };
}
