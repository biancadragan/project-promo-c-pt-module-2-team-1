'use strict';

const btnImage = document.querySelector('.js_btnimage');

// Evento para botón imagen
btnImage.addEventListener('change', (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if(file){
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else{
        previewImage.src = '';
    }
});

console.log(reader);