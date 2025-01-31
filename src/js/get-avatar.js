'use strict'

console.log("Ready");

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

// Recuperar imagen del LocalStorage al cargar la página
function loadStoredImage() {
  const storedImage = localStorage.getItem('profileImage');
  if (storedImage) {
    profileImage.style.backgroundImage = `url(${storedImage})`;
    profilePreview.style.backgroundImage = `url(${storedImage})`;
  }
}

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e 
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  const imageURL = fr.result;

  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;

  // Guardar en LocalStorage
  localStorage.setItem('profileImage', imageURL);
}


/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);

loadStoredImage();

const btnDeleteI = document.querySelector(".js_preview-btn");

const clearDataI = (ev) => {
  localStorage.removeItem('profileImage');
}

btnDeleteI.addEventListener('click', clearDataI);