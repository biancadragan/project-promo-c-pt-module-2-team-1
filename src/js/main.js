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
const data = {
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

// Desplegables

const designIcon = document.querySelector('.js_designIcon');
const fillIcon = document.querySelector('.js_fillIcon');
const shareIcon = document.querySelector('.js_shareIcon');

const toggleCollapsible(icon) {

    // Encuentra el contenedor del colapsable
    const collapsibleContent = icon.closest('.collapsible').querySelector('.collapsible__content');

    // Alternar la clase para mostrar/ocultar el contenido
    collapsibleContent.classList.toggle('is-open');

    // Cambiar el icono de caret
    if (collapsibleContent.classList.contains('is-open')) {
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-up');
    } else {
        icon.classList.remove('fa-caret-up');
        icon.classList.add('fa-caret-down');
    }
}

// Añadir evento de clic para cada icono
designIcon.addEventListener('click', () => toggleCollapsible(designIcon));
fillIcon.addEventListener('click', () => toggleCollapsible(fillIcon));
shareIcon.addEventListener('click', () => toggleCollapsible(shareIcon));
