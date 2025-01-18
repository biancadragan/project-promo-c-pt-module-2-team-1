"use strict";

console.log(">> Ready :)");

import "./get-avatar.js";

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

const previewName = document.querySelector(".js_preview_name");
const previewJob = document.querySelector(".js_preview_job");
const previewIcons = document.querySelectorAll(".js_previewIcon");

const applyTheme = (theme) => {
    previewName.style.color = theme.nameColor;
    previewJob.style.color = theme.jobColor;
    previewIcons.forEach((icon) => {
        icon.style.color = theme.iconsColor;
    });
};

document.addEventListener("DOMContentLoaded", () => {

    const savedData = localStorage.getItem("data");
    if (savedData) {
        data = JSON.parse(savedData); // Convierte el JSON a un objeto
    }
    applyTheme(themes[data.field1]);

    // applyTheme(themes[selectedTheme]); // Aplica el tema basado en el radio seleccionado
    form.elements["field2"].value = data.field2;
    form.elements["field3"].value = data.field3;
    form.elements["field4"].value = data.field4;
    form.elements["field5"].value = data.field5;
    form.elements["field6"].value = data.field6;
    form.elements["field7"].value = data.field7;

    // Actualiza la previsualización
    updatePreview();
});

// Event listeners para cada radio button
document.getElementById("palette1").addEventListener("change", () => {
    applyTheme(themes.theme1); // Aplica el tema 1
});

document.getElementById("palette2").addEventListener("change", () => {
    applyTheme(themes.theme2); // Aplica el tema 2
});

document.getElementById("palette3").addEventListener("change", () => {
    applyTheme(themes.theme3); // Aplica el tema 3
});

// PREVIEW Section
let data = {
    field1: "theme1",
    field2: "",
    field3: "",
    photo: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
};

// Selección de elementos del formulario y previsualización
const form = document.querySelector(".js_form");
const namePreview = document.querySelector(".js_preview_name");
const jobPreview = document.querySelector(".js_preview_job");
const emailPreview = document.querySelector(".js_preview_email");
const phonePreview = document.querySelector(".js_preview_phone");
const linkedInPreview = document.querySelector(".js_preview_linkedin");
const githubPreview = document.querySelector(".js_preview_github");

// Manejador del input
const handleInput = (ev) => {
    const field = ev.target.name; // ID del campo del formulario
    data[field] = ev.target.value; // Actualiza el objeto `data`

    localStorage.setItem("data", JSON.stringify(data));

    // Llama a la función para actualizar la previsualización
    updatePreview();
};

// Función para actualizar la previsualización
function updatePreview() {

    // Actualizamos nombre y puesto
    namePreview.innerHTML = data.field2 === "" ? "Nombre Apellido" : data.field2;
    jobPreview.innerHTML = data.field3 === "" ? "Posición" : data.field3;

    // Actualizamos enlaces de contacto
    phonePreview.setAttribute("href", data.field5 ? `tel:${data.field5}` : "");
    emailPreview.setAttribute("href", data.field4 ? `mailto:${data.field4}` : "");

    // Ocultamos íconos si los campos están vacíos
    phonePreview.style.display = data.field5 ? "inline-block" : "none";
    emailPreview.style.display = data.field4 ? "inline-block" : "none";
    linkedInPreview.setAttribute("href", data.field6 ? data.field6 : "");
    linkedInPreview.style.display = data.field6 ? "inline-block" : "none";
    githubPreview.setAttribute("href", data.field7 ? data.field7 : "");
    githubPreview.style.display = data.field7 ? "inline-block" : "none";



}

// Escuchamos el evento `input` en el formulario
form.addEventListener("input", handleInput);

// Inicializamos la previsualización
updatePreview();

//Seccion compartir

//Selectores de contenido

const createBtn = document.querySelector(".js_createBtn");
const cardResultSection = document.querySelector(".js__card_result");

//Acciones de botón "Crear tarjeta"

function handleClickCreate(ev) {
    ev.preventDefault();

    console.log(data);

    //fetch con peticiones al servidor y promesas

    data.field1 = parseInt(data.field1.replace("theme", ""));
    fetch("https://dev.adalab.es/api/info/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }) //enviar datos
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);

            //resultados y botón de envío de la tarjeta a Bluesky
            if (responseData.success === true) {

                const infoID = responseData.infoID;
                const baseUrl = `https://dev.adalab.es/api/info/${infoID}`;
                const text = encodeURIComponent("¡Mira mi tarjeta de visita diseñada en ProCard Creator!");

                const blueskyUrl = `https://bsky.app/intent/compose?text=${text}&url=${encodeURIComponent(baseUrl)}`;


                cardResultSection.innerHTML = `
        <h2 class="share_result__title">¡Aquí tienes el enlace a tu ProCard!</h2>
        <p>Que la disfrutes &#x1F604</p>
        <a class="share_result__link" href="${baseUrl}">${baseUrl}</a>
        <a class="share_result__shareButton" href="${blueskyUrl}" target="_blank">Compartir en Bluesky</a>
        `; //pinta un texto de confirmación y un enlace a Bluesky

            } else {
                const errorEnCastellano = responseData.error
                    .replace("Mandatory fields", "Campos obligatorios a rellenar")
                    .replace("field2", "nombre")
                    .replace("field3", "puesto")
                    .replace("field4", "email")
                    .replace("field5", "teléfono")
                    .replace("field6", "LinkedIn")
                    .replace("field7", "Github")
                    .replace("photo", "foto");
                cardResultSection.innerHTML = `
        <h2 class="share_result__title">¡Oh, vaya! &#128517</h2>
        <p class="share_result__subtitle">No se ha podido completar el proceso.</p>
        <p class="share_result__subtitle">Vuelve a intentarlo, por favor &#128519</p>
        <b class="share_result__mandatory">${errorEnCastellano}</b>
        `; //genera un mensaje de error si no se rellenan los campos necesarios para generar la tarjeta
            }
        })

        .catch((error) => {
            console.error("Error al enviar los datos:", error);
        });
}

//evento para que al hacer click ejecute la acción
createBtn.addEventListener("click", handleClickCreate);

//Almacenamiento en local (LocalStorage)


//BORRAR LOS DATOS

const btnDelete = document.querySelector(".js_preview-btn");

let clearData = (ev) => {
    console.log("funciono");

    data = {
        field1: "theme1",
        field2: "",
        field3: "",
        photo: "",
        field4: "",
        field5: "",
        field6: "",
        field7: "",
    };

    profileImage.style.backgroundImage = "url('../images/Profile-pic.png')";
    profilePreview.style.backgroundImage =
        "url('../images/Profile-pic.png')";

    // Limpiar el formulario
    form.reset();

    // Limpiar la previsualización
    updatePreview();

    // Restablecer el tema por defecto
    applyTheme(themes.theme1);

    cardResultSection.innerHTML = "";

    localStorage.removeItem("data");
};

btnDelete.addEventListener('click', clearData);



// Desplegables

const designIcon = document.querySelector('.js_designIcon');
const fillIcon = document.querySelector('.js_fillIcon');
const shareIcon = document.querySelector('.js_shareIcon');

const toggleCollapsible = (icon, fieldsetClass) => {

    const fieldset = document.querySelector(fieldsetClass); // Selecciona la sección específica
    const contents = fieldset.querySelectorAll('.js_collapsibleContent'); // Encuentra el contenido de la sección

    // Alternar la clase para mostrar/ocultar el contenido
    contents.forEach(content => {
        if (content) {
            content.classList.toggle('is-open');
        }
    });

    // Cambiar el icono de caret

    if (contents[0].classList.contains('is-open')) {
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-up');
    } else {
        icon.classList.remove('fa-caret-up');
        icon.classList.add('fa-caret-down');
    }
}

// Añadir evento de clic para cada icono
designIcon.addEventListener('click', () => toggleCollapsible(designIcon, '.js_designFieldset'));
fillIcon.addEventListener('click', () => toggleCollapsible(fillIcon, '.js_fillFieldset'));
shareIcon.addEventListener('click', () => toggleCollapsible(shareIcon, '.js_shareFieldset'));




