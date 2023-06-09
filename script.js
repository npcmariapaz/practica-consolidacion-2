$(document).ready(function () {
    const url = 'https://digimon-api.vercel.app/api/digimon/';
    fetch(url)
        .then(response => response.json())
        .then(json => {
            var select = document.querySelector('#opcion');
            json.forEach(option => {
                select.appendChild(new Option(option.name, option.name));
            });
            var listado = document.getElementById('listados');
            json.forEach(option => {
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(option.name));
                li.classList.add("list-group-item"); 
                listado.appendChild(li);
            });
        });
});

//desde aquí en adelante CHATGPT hizo casi todo

$(document).ready(function () {
    var select = document.getElementById('opcion');
    select.addEventListener('change', function () {
        var selectedDigimon = this.value;
        var tableContainer = document.getElementById('table-container');
        tableContainer.innerHTML = ''; // Limpia el contenido previo del contenedor

        fetch('https://digimon-api.vercel.app/api/digimon')
            .then(response => response.json())
            .then(data => {
                var digimon = data.filter(digimon => digimon.name === selectedDigimon)[0]; // Obtiene el digimon seleccionado

                // Crea la tabla
                var table = document.createElement('table');
                table.classList.add('table');
                table.classList.add('table-hover');
                table.classList.add('table-success');
                table.classList.add('table-sm');
                table.classList.add('text-center');




                // Crea la fila del nombre
                var nameRow = document.createElement('tr');
                var nameHeader = document.createElement('th');
                nameHeader.scope = 'row';
                var nameData = document.createElement('td');
                nameData.innerHTML = digimon.name;
                nameRow.appendChild(nameHeader);
                nameRow.appendChild(nameData);
                table.appendChild(nameRow);
                nameData.classList.add('fw-bold');
                nameData.classList.add('fs-3');
                nameData.classList.add('badge');
                nameData.classList.add('text-bg-light');
                

                


                // Crea la fila de la imagen
                var imageRow = document.createElement('tr');
                var imageHeader = document.createElement('th');
                imageHeader.scope = 'row';
                var imageData = document.createElement('td');
                var image = document.createElement('img');
                image.src = digimon.img;
                imageData.appendChild(image);
                imageRow.appendChild(imageHeader);
                imageRow.appendChild(imageData);
                table.appendChild(imageRow);
                image.classList.add("img-fluid");


                // Crea la fila de la descripción
                var descriptionRow = document.createElement('tr');
                var descriptionHeader = document.createElement('th');
                descriptionHeader.scope = 'row';
                var descriptionData = document.createElement('td');
                descriptionData.innerHTML = digimon.level + ' level ';
                descriptionRow.appendChild(descriptionHeader);
                descriptionRow.appendChild(descriptionData);
                table.appendChild(descriptionRow);
                descriptionData.classList.add('badge');
                descriptionData.classList.add('bg-primary');
                descriptionData.classList.add('text-warp');

                // Agrega la tabla al contenedor
                tableContainer.appendChild(table);
            })
    })
})
