import { getUserById } from "./peticiones.js";
const mostrarPersonaje=async ()=>{
    const valores=window.location.search
    const urlParams =new URLSearchParams(valores);
    const id=urlParams.get("id")
    const personaje=await getUserById(id)
    crearCard(personaje)
    
    
}
const crearCard=(personaje)=>{
  
    const main= document.querySelector('main')
    const card= document.createElement("div")
    const status=document.createElement("h2")
    const nombre=document.createElement("h2")
    const especie=document.createElement("h2")
    const genero=document.createElement("h2")
    card.classList.add("card-caracteristica--personaje")
    const labelNombre=document.createElement("label")
    labelNombre.textContent="nombre:"
    const labelStatus=document.createElement("label")
    labelStatus.textContent="estado:"
    const labelEspecie=document.createElement("label")
    labelEspecie.textContent="especie:"
    especie.textContent=personaje.species
    nombre.textContent=personaje.name
    status.textContent=personaje.status   
    card.classList.add("card-descripcion--personaje")
    const imagen=document.createElement("img")
    imagen.src=personaje.image
    imagen.classList.add("imagen-persoanje--caracteristicas")
    card.appendChild(imagen)
    card.appendChild(labelNombre)
    card.appendChild(nombre)
    card.appendChild(labelStatus)
    card.appendChild(status)
    card.appendChild(labelEspecie)
    card.appendChild(especie)
    main.appendChild(card)
    for(const key in personaje){
        if(personaje[key]){
            console.log(key," ",personaje[key])
        }
        
    }
}
mostrarPersonaje()