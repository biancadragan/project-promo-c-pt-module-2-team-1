'use strict';

console.log('>> Ready :)');

//selectores de contenido
const createBtn = document.querySelector('.js_createBtn'); 
const shareBtn = document.querySelector('js_shareBtn'); 
//objeto de datos
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

//evento y funciones
function handleClickCreate = (ev) => {
    ev.preventDefault(); 
    console.log (data); 

}; 

createBtn.addEventListener('click', handleClickCreate); 