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

const previewName = document.querySelector('.js_previewName');
const previewJob = document.querySelector('.js_previewJob');
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