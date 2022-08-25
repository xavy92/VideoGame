//Agregar el evento clic al boton
let btnIniciar = document.querySelector(".inicio")

btnIniciar.addEventListener("click", () => {
    iniciarJuego()
})

//imagenes

const tanq = new Image() 
tanq.src = "tanque.png"

const bombImg = new Image()
bombImg.src = "bomba.png"

const balImg = new Image()
balImg.src = "bala.png"


//seleccionar canvas 
let lienzo = document.getElementById("lienzo")
//Acceso al metodo getContext()

let ctx = lienzo.getContext("2d")

//lista de enemigos/ otros elementos
const armas = []
const armasProp = []

 

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
        if(this.x + this.w < 600){ 
        this.x += 10;
    }
    }
    izquierda () {
        if (this.x > 0) {
        this.x -= 10;
    }
    }
    disparar () {
        console.log("disparar")
        const balita = new Bala(this.x +  this.w / 2  , this.y - 30 , 20, 40, "" ,balImg)
        armasProp.push(balita)
        console.log(armasProp)
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
        ctx.drawImage(this.imagen, this.x, this.y, this.w, this.h)
        this.y += 1
    }
}

//balas
class Bala{
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
        ctx.drawImage(this.imagen, this.x, this.y, this.w, this.h)
        this.y -= 3
    
    }
}



//dibujar linea

// function dibujarPiso()

//Moatrar el nombre del juego 

function mostrarDatos (distancia, score, vida) {
    ctx.fillStyle = "black"
    ctx.font = "35px Arial"
    ctx.fillText("War Zone", 210, 35)
    ctx.fillText(`${distancia}m`,50, 35)

    ctx.fillText(`score: ${score}`,420, 35)
    ctx.fillText(`Vida: ${vida}`, 420, 75)

}

//escuchar teclas

function teclas(tanquecito) {
    document.addEventListener("keyup", (evento) => {
        console.log("tecla tocada", evento.code)
        switch(evento.code){
            case "Space":
                tanquecito.disparar()
                break
            case "ArrowRight":
                tanquecito.derecha()
                break
            case "ArrowLeft":
                tanquecito.izquierda()
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
        const posicionX = Math.floor(Math.random() * 550)
        const bombas = new Bombas(posicionX, 0, 50, 50, "red", bombImg,"facil")
        armas.push(bombas)
    }
}

function iniciarJuego () {
    let distancia = 0
    const tanquecito = new Tanque(250, 450, 100, 50, "green", 100, tanq)
    teclas(tanquecito)
    console.log(tanquecito)
    tanquecito.dibujarse()

    
     //Aqui se re-dibuja el juego

    setInterval(() => {
        ctx.clearRect(0, 0, 600, 500)
        //mostrar datos
        mostrarDatos(distancia, 0, tanquecito.vida)
        distancia += 1
        tanquecito.dibujarse()

        //dibujar enemigos/elementos estra 

        armas.forEach((bombas, index) => {
        bombas.dibujarse()
        if(bombas.y === tanquecito.y - tanquecito.h) {
            armas.splice(index, 1)
            tanquecito.vida -= 25
            //si sigue con vidas
            if(tanquecito.vida <100) {
                alert("murio")
            }
        }

    }) 


    armasProp.forEach((bala, baIndex)=> {
        bala.dibujarse()
        armas.forEach((bombas,bIndex)=> {
            if(bala.y <= bombas.y + bombas.h && bala.x >= bombas.x && bala.x <= bombas.x + bombas.w){
                armasProp.splice(baIndex, 1)
                armas.splice(bIndex, 1) 
            } 
        }) 

    })

    crearBombas()  
    }, 1000/30)
 
}


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