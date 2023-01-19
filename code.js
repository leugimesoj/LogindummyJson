import { validacionDatos } from "./peticiones.js";
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const formulario = document.querySelector("form");
const response = {};
formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  response[email.name]=email.value
  response[password.name]=password.value
 const jsonResponse= await validacionDatos(response)
 if(jsonResponse.status){
    console.log(jsonResponse)
    const usuario=jsonResponse.user
    alert("iniciando sesion del usuario: ",usuario)
 }else{
    alert("Esta intentando ingresar con datos erroneos")
 }

});
