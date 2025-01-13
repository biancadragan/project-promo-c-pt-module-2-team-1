'use strict';

const imgFile = document.querySelector('.js_imgFile');
const fr = new FileReader();
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

function getImage(e) {
    const myFile = e.currentTarget.files[0];
    if (myFile) {
        console.log(`Archivo seleccionado: ${myFile.name}`);
        fr.addEventListener('load', writeImage);
        fr.readAsDataURL(myFile);
    } else {
        console.error('No se seleccionó ningún archivo.');
    }
};

function writeImage() {
    console.log('Imagen cargada correctamente. Actualizando previsualización...');
    profileImage.style.backgroundImage = `url(${fr.result})`;
    profilePreview.style.backgroundImage = `url(${fr.result})`;
};

imgFile.addEventListener('change', getImage);