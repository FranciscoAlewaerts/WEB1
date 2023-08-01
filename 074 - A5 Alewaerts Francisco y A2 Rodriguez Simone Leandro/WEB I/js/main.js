"use strict"

//Validacion por captcha

const msjCaptcha = document.createTextNode("");

function setCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const captchaEl = document.getElementById("captcha");
    const captcha = num1 + num2;
    captchaEl.value = "";
    captchaEl.setAttribute("respuesta", captcha);
    captchaEl.placeholder = `${num1} + ${num2} =`;
  }


  function compruebaCaptcha() {
    const respingresada = parseInt(document.getElementById("captcha").value);
    const captchaEl = document.getElementById("captcha");
    const respcorrecta = parseInt(captchaEl.getAttribute("respuesta"));
    if (respingresada === respcorrecta) {
      const contenedor = document.getElementById("form");
      msjCaptcha.nodeValue = "ENVIADO CORRECTAMENTE.";
      contenedor.appendChild(msjCaptcha);
    } else {
      const contenedor = document.getElementById("form");
      msjCaptcha.nodeValue = "CAPTCHA INCORRECTO.";
      contenedor.appendChild(msjCaptcha);
    }
  }


  setCaptcha();


//Validacion del formulario

let form = document.querySelector('#form');
form.addEventListener('submit', agregar);

function agregar(e) {
    e.preventDefault();

    let formData = new FormData(form);

    let nombre = formData.get('nombre');
    let apellido = formData.get('apellido');
    let telefono = formData.get('telefono');
    let email = formData.get('email');

    console.log(nombre, apellido, telefono, email);
}
//Datos de la tabla
  
/* MENU HAMBURGUESA*/
function mostrar(){
  document.getElementById('ulMenuHam').style.display = 'flex';

}
function ocultar(){
  document.getElementById('ulMenuHam').style.display = 'none';

}
function mostrar_ocultar(){
  var caja = document.getElementById('ulMenuHam');
  if(caja.style.display == 'none'){
    mostrar();
  }else{
    
    ocultar();
  }
}

