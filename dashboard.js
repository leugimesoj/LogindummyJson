import {getPersoanjes} from "./peticiones.js"

const mainTag=document.querySelector("#cards")

const mostrarPersonajes= async()=>{
    const personajes=await getPersoanjes()
    personajes.map((personaje)=>{
        createCard(personaje.name,personaje.image,personaje.id)
       
    })
    
}

const createCard=(nombre,urlImagen,id)=>{
    
    const card=document.createElement("div")
    const divBoton=document.createElement("div")
    const imagen= document.createElement("img")
    const nombrePersonaje=document.createElement("h2")
    const buttom=document.createElement("button")
    card.classList.add("card")
    buttom.textContent="mas informacion"
    buttom.classList.add("boton--informacion")
    divBoton.classList.add("div--titulo")
    nombrePersonaje.textContent=nombre
    nombrePersonaje.classList.add("nombre--personaje")
    imagen.src=urlImagen
    imagen.classList.add("imagen--personaje")
    card.appendChild(imagen)
    divBoton.appendChild(nombrePersonaje)
    divBoton.appendChild(buttom)
    buttom.addEventListener('click',(evento)=>{
        window.location.href="http://127.0.0.1:5500/personaje.html?id="+id
    })
    card.classList.add("card--personajes")
    card.appendChild(divBoton)
    mainTag.appendChild(card)


}
mostrarPersonajes()

