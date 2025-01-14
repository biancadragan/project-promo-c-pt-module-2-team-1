'use strict';

console.log('>> Ready :)');

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

