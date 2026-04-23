const palabras = ["AREQUIPA", "MISTI", "CHACHANI", "PAMPACOLCA", "CHARACATO"];

let palabra = "";
let progreso = [];
let errores = 0;
let usadas = [];

// CONTENEDOR
const contenedor = document.createElement("div");
contenedor.className = "contenedor";

// TITULO
const titulo = document.createElement("h1");
titulo.innerText = "El Ahorcado - Arequipa";

// SECCION DEl JUEGO
const juego = document.createElement("div");
juego.className = "juego";

// CANVAS
const canvasBox = document.createElement("div");
canvasBox.className = "canvas-box";

const canvas = document.createElement("canvas");
canvas.width = 250;
canvas.height = 300;
const ctx = canvas.getContext("2d");

canvasBox.appendChild(canvas);

// INFORMACION de letras, ganadas y errores
const info = document.createElement("div");
info.className = "info";

const texto = document.createElement("p");
texto.innerText = "Palabra a adivinar:";

const palabraDiv = document.createElement("div");
palabraDiv.className = "palabra";

const erroresDiv = document.createElement("div");
erroresDiv.className = "errores";

const mensaje = document.createElement("div");

const boton = document.createElement("button");
boton.className = "boton";
boton.innerText = "Iniciar Juego";

// LETRAS
const letrasDiv = document.createElement("div");
letrasDiv.className = "letras";

// ARMAR
info.appendChild(texto);
info.appendChild(palabraDiv);
info.appendChild(erroresDiv);
info.appendChild(mensaje);
info.appendChild(boton);

juego.appendChild(canvasBox);
juego.appendChild(info);

contenedor.appendChild(titulo);
contenedor.appendChild(juego);
contenedor.appendChild(letrasDiv);

document.body.appendChild(contenedor);

// INICIAR
boton.onclick = iniciarJuego;

function iniciarJuego() {
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    progreso = Array(palabra.length).fill("_");
    errores = 0;
    usadas = [];

    palabraDiv.innerText = progreso.join(" ");
    erroresDiv.innerHTML = "";
    mensaje.innerHTML = "";
    letrasDiv.innerHTML = "";

    boton.innerText = "Volver a jugar";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    generarLetras();
}

// LETRAS
function generarLetras() {
    for (let l of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
        const btn = document.createElement("button");
        btn.innerText = l;

        btn.onclick = () => {
            usadas.push(l);

            let acierto = false;

            for (let i = 0; i < palabra.length; i++) {
                if (palabra[i] === l) {
                    progreso[i] = l;
                    acierto = true;
                }
            }

            if (acierto) {
                btn.classList.add("correcta");
            } else {
                btn.classList.add("incorrecta");
                errores++;
                dibujar(errores);
            }

            btn.disabled = true;

            palabraDiv.innerText = progreso.join(" ");

            erroresDiv.innerHTML =
                "Errores: " + errores + " / 10 <br> Letras incorrectas: " +
                usadas.filter(x => !palabra.includes(x)).join(", ");

            if (!progreso.includes("_")) {
                mensaje.className = "mensaje ganar";
                mensaje.innerHTML = "¡Ganaste! <br> La palabra era: " + palabra;
            }

            if (errores === 10) {
                mensaje.className = "mensaje perder";
                mensaje.innerHTML = "Perdiste <br> Era: " + palabra;
            }
        };

        letrasDiv.appendChild(btn);
    }
}

// CANVAS
function dibujar(p) {
    switch (p) {
        case 1: ctx.moveTo(10,290); ctx.lineTo(200,290); ctx.stroke(); break;
        case 2: ctx.moveTo(50,290); ctx.lineTo(50,50); ctx.stroke(); break;
        case 3: ctx.moveTo(50,50); ctx.lineTo(150,50); ctx.stroke(); break;
        case 4: ctx.moveTo(150,50); ctx.lineTo(150,80); ctx.stroke(); break;
        case 5: ctx.beginPath(); ctx.arc(150,100,20,0,Math.PI*2); ctx.stroke(); break;
        case 6: ctx.moveTo(150,120); ctx.lineTo(150,200); ctx.stroke(); break;
        case 7: ctx.moveTo(150,140); ctx.lineTo(120,170); ctx.stroke(); break;
        case 8: ctx.moveTo(150,140); ctx.lineTo(180,170); ctx.stroke(); break;
        case 9: ctx.moveTo(150,200); ctx.lineTo(120,240); ctx.stroke(); break;
        case 10: ctx.moveTo(150,200); ctx.lineTo(180,240); ctx.stroke(); break;
    }
}