
$(document).ready(function(){
        const url = 'https://digimon-api.vercel.app/api/digimon/'
        fetch(url)
        .then(response=> response.json())
        .then(json => {
            var select = document.querySelector('#opcion');
            json.forEach(option => {
                select.appendChild(new Option(option.name, option.name));
            });
        })
    });


