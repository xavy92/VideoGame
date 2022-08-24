//Agregar el evento clic al boton
let btnIniciar = document.querySelector(".inicio")

btnIniciar.addEventListener("click", () => {
    console.log("inicia el juegooooo")
})

//imagenes

const tanq = new Image() 
tanq.src = "tanque.png"

//seleccionar canvas 
let lienzo = document.getElementById("lienzo")
//Acceso al metodo getContext()

let ctx = lienzo.getContext("2d")

//lista de enemigos/ otros elementos
const armas = []

 

//Personaje ---> class
class Tanque{
    constructor(x, y, w, h, color, vida, imagen) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
        this.vida = vida 
        this.imagen = imagen 
    }
    derecha () {
        console.log("Avanza")
        this.x += 10;
    }
    izquierda () {
        console.log("retroceder")
    }
    disparar () {
        console.log("disparar")
    }
    dibujarse () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
        //imagen

        ctx.drawImage(this.imagen, this.x, this.y, this.w, this.h)
    }
    morirse () {

    }
}

//Nuestro enemigo ---> balas

class Bombas{
    constructor(x, y, w, h, color, imagen) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
        this.imagen = imagen
    }
    dibujarse() { 
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, this.w, this.h)
        this.y += 1
    }
}


//dibujar linea

// function dibujarPiso()

//Moatrar el nombre del juego 

function mostrarDatos (distancia) {
    ctx.fillStyle = "black"
    ctx.font = "35px Arial"
    ctx.fillText("War Zone", 210, 35)
    ctx.fillText(`${distancia}m`,50, 35)

    ctx.fillText(`score: 0`,420, 35)

}


//escuchar teclas

function teclas(tanquecito) {
    document.addEventListener("keyup", (evento) => {
        console.log("tecla tocada", evento.code)
        switch(evento.code){
            case "Space":
                console.log("Brincale")
                break
            case "ArrowRight":
                tanquecito.derecha()
                break
            case "ArrowLeft":
                console.log("para atras")
                break
            case "ArrowDown":
                console.log("Abajo")
                break
            case "ArrowUp":
                    console.log("arriba")
                break         
        }
            
        
    })
}
//crear enemigos
function crearBombas () {
    const num = Math.floor(Math.random() * 100)
    console.log(num)
    if(num === 3) {
        const bombas = new Bombas(250, 0, 50, 50, "red","","facil")
        armas.push(bombas)
    }
}

function iniciarJuego () {
    let distancia = 0
    const tanquecito = new Tanque(250, 400, 100, 50, "green", 100, tanq)
    teclas(tanquecito)
    console.log(tanquecito)
    tanquecito.dibujarse()

    
     

    setInterval(() => {
    ctx.clearRect(0, 0, 600, 500)
    //mostrar datos
    mostrarDatos(distancia)
    distancia += 1
    tanquecito.dibujarse()

    //dibujar enemigos/elementos estra 

    armas.forEach((bombas) => {
        bombas.dibujarse()
    })
    

    crearBombas()
    }, 30)
 
}
iniciarJuego()

//agregar la imagen de tanque
//crear enemigos
//moverse 
//recibir daño
//llevar el contador de avance
//score
//perder
//disparar 
//agregar sonido
//gane 
//reiniciar juego 