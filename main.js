const boton = document.querySelector('button')
const contenedor = document.getElementById('contenedor')
const cont = document.getElementById('cont')
let usuarios = [];

function pintarEnPantalla () {
    let nombre = localStorage.getItem('nombre');
    let correo  = localStorage.getItem('correo');
    let texto = localStorage.getItem('texto')
    console.log(`Hola, mi nombre es ${nombre} y mi correo es: ${correo}`)
    contenedor.innerHTML = `
                        <h2>${nombre}</h2>
                        <h2>${correo}</h2>
                        <p>${texto}</p>
                        `
}

function enviarDatos() {    
    let user = {
        nombre: nombre.value,
        correo: correo.value,
        texto: texto.value
    }
    usuarios.push(user)
    console.log(usuarios)
    localStorage.setItem("user", JSON.stringify(usuarios));
    cont.innerHTML = ''     
    // pintarEnPantalla()  
    pintarUsuarios() 
}

const pintarUsuarios = () => {
    let data = JSON.parse(localStorage.getItem("user"));
    for (let i = 0; i < data.length; i++) {
        cont.innerHTML += `<p>${data[i].nombre}
                              ${data[i].correo}
                              ${data[i].texto}
                              </p>`
    }
}
