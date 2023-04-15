
$(document).ready(function(){
    document.addEventListener('DOMContentLoaded', function() {
        fetch('https://digimon-api.vercel.app//api/digimon/name/:name')
        .then(response => response.json())
        .then(data => {
            var select = document.getElementById('opcion');
            data.forEach(option => {
                select.appendChild(new Option(option.text, option.value));
            });
        })
        .catch(error => {
            console.error('Error al cargar las opciones:', error);
        });
    });
})