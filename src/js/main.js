'use strict';

console.log('>> Ready :)');


// Previsualización de tarjeta


const themes = {
    theme1: {
        nameColor: "#264653",
        jobColor: "#2a9d8f",
        iconsColor: "#e9c46a",
    },
    theme2: {
        nameColor: "#f4a261",
        jobColor: "#e76f51",
        iconsColor: "#d62828",
    },
    theme3: {
        nameColor: "#8ecae6",
        jobColor: "#219ebc",
        iconsColor: "#023047",
    },
};

const previewName = document.querySelector('.js_preview_name');
const previewJob = document.querySelector('.js_preview_job');
const previewIcons = document.querySelectorAll('.js_previewIcon');
const paletteInputs = document.querySelectorAll('input[name="theme"]');

const applyTheme = (theme) => {

    previewName.style.color = theme.nameColor;
    previewJob.style.color = theme.jobColor;
    previewIcons.forEach((icon) => {
        icon.style.color = theme.iconsColor;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
    applyTheme(themes[selectedTheme]); // Aplica el tema basado en el radio seleccionado
});

// Event listeners para cada radio button
document.getElementById('palette1').addEventListener('change', () => {
    applyTheme(themes.theme1); // Aplica el tema 1
});

document.getElementById('palette2').addEventListener('change', () => {
    applyTheme(themes.theme2); // Aplica el tema 2
});

document.getElementById('palette3').addEventListener('change', () => {
    applyTheme(themes.theme3); // Aplica el tema 3
});

import './get-avatar.js';

// PREVIEW Section
let data = {
    palette: 1,
    name: '',
    job: '',
    photo: '',
    phone: '',
    email: '',
    linkedin: '',
    github: ''
};

// Selección de elementos del formulario y previsualización
const form = document.querySelector('.js_form');
const namePreview = document.querySelector('.js_preview_name');
const jobPreview = document.querySelector('.js_preview_job');
const emailPreview = document.querySelector('.js_preview_email');
const phonePreview = document.querySelector('.js_preview_phone');
const linkedInPreview = document.querySelector('.js_preview_linkedin');
const githubPreview = document.querySelector('.js_preview_github');

// Manejador del input
const handleInput = (ev) => {
    const field = ev.target.id; // ID del campo del formulario
    data[field] = ev.target.value; // Actualiza el objeto `data`


    // Llama a la función para actualizar la previsualización
    updatePreview();
};

// Función para actualizar la previsualización
function updatePreview() {
    // Actualizamos nombre y puesto
    namePreview.innerHTML = (data.name === '') ? 'Nombre Apellido' : data.name;
    jobPreview.innerHTML = (data.job === '') ? 'Posición' : data.job;

    // Actualizamos enlaces de contacto
    phonePreview.setAttribute('href', data.phone ? `tel:${data.phone}` : '');
    emailPreview.setAttribute('href', data.email ? `mailto:${data.email}` : '');

    // Ocultamos íconos si los campos están vacíos
    phonePreview.style.display = data.phone ? 'inline-block' : 'none';
    emailPreview.style.display = data.email ? 'inline-block' : 'none';
    linkedInPreview.setAttribute('href', data.linkedin ? data.linkedin : '');
    linkedInPreview.style.display = data.linkedin ? 'inline-block' : 'none';
    githubPreview.setAttribute('href', data.github ? data.github : '');
    githubPreview.style.display = data.github ? 'inline-block' : 'none';
}

// Escuchamos el evento `input` en el formulario
form.addEventListener('input', handleInput);

// Inicializamos la previsualización
updatePreview();

//BORRAR LOS DATOS


const btnDelete = document.querySelector(".js_preview-btn");
const profileImageReset = document.querySelector(".js__profile-image");
const profilePreviewReset = document.querySelector('.js__profile-preview');


let clearData = (ev) => {
    console.log('funciono');

    data = {
        palette: "theme1",
        name: '',
        job: '',
        photo: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
    };

    profileImageReset.style.backgroundImage = "url('../images/Profile-pic.png')";
    profilePreviewReset.style.backgroundImage = "url('../images/Profile-pic.png')";

    // Limpiar el formulario
    form.reset();

    // Limpiar la previsualización
    updatePreview(data);

    // Restablecer el tema por defecto
    applyTheme(themes.theme1);





};

btnDelete.addEventListener('click', clearData);







