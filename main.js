const boton = document.querySelector('button')
const contenedor = document.getElementById('contenedor')
const cont = document.getElementById('cont')
let mail  = document.getElementById('email');

function enviarDatos() {  
    let usuarios =  JSON.parse(localStorage.getItem("user")) || []; 
    let user = {
        nombre: nombre.value,
        correo: correo.value,
        texto: texto.value
    }
    usuarios.push(user)
    // console.log(usuarios)
    localStorage.setItem("user", JSON.stringify(usuarios));
    cont.innerHTML = ''    
    pintarUsuarios() 
}

const pintarUsuarios = () => {
    let data = JSON.parse(localStorage.getItem("user"));
    for (let i = 0; i < data.length; i++) {
        cont.innerHTML += `<p>${data[i].nombre}<br>
                              ${data[i].correo}<br>
                              ${data[i].texto}<br>
                              </p><br>
                              <button onClick="borrarUsuario('${data[i].correo}')">Borrame</button><br><br>`
    }
}

function borrarDatos(){
    localStorage.clear()
    cont.innerHTML = ""
}

function borrarUsuario(x){
    console.log(x)
    let newArray =[]

    let data = JSON.parse(localStorage.getItem("user"));
    
    for (let i = 0; i < data.length; i++) {
        console.log(data)
        console.log(data[i].correo)
        if (x !== data[i].correo ){
            newArray.push(data[i])
        }           
      
    }   
    console.log(newArray)
    localStorage.setItem("user", JSON.stringify(newArray));
    cont.innerHTML = '' 
    pintarUsuarios()    
}
