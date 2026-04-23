const tiposDeTarjetas = [
    "Debito",
    "Credito",
]
const tiposDeDocumentos = [
    "DNI",
    "Carnet de extranjeria",
    "RUC",
    "Pasaporte",
    "Cedula diplomatica de identidad"
]

function iniciarEstructura() {
    //Caja principal
    let cajacontenedora = document.createElement("main");
    cajacontenedora.id = "cajacontenedora"
    document.body.appendChild(cajacontenedora);

    //Tipo de tarjeta
    let tipoDeTarjetaCaja = document.createElement("section");
    cajacontenedora.appendChild(tipoDeTarjetaCaja);
    tipoDeTarjetaCaja.id = "tipoDeTarjetaCaja";

    let labelSelector = document.createElement("label");
    labelSelector.className = "labelGenerico"
    tipoDeTarjetaCaja.appendChild(labelSelector);
    labelSelector.textContent = "Tipo de tarjeta: ";

    let selector = document.createElement("select");
    selector.className = "menuTipoDeTarjeta"
    tipoDeTarjetaCaja.appendChild(selector);
    for (let a = 0; a < 2; a++) {
        let tipodeTarjeta = document.createElement("Option");
        tipodeTarjeta.textContent = tiposDeTarjetas[a];
        tipodeTarjeta.className = "opcionDelMenuTipoDeTarjeta";
        selector.appendChild(tipodeTarjeta);
    }


    //Numero de tarjeta
    let numeroDeTarjetaCaja = document.createElement("section")
    cajacontenedora.appendChild(numeroDeTarjetaCaja);
    numeroDeTarjetaCaja.className = "numeroDeTarjetaCaja";

    let labelNumeroDeTarjeta = document.createElement("label");
    numeroDeTarjetaCaja.appendChild(labelNumeroDeTarjeta);
    labelNumeroDeTarjeta.textContent = "Numero de tarjeta: "
    let inputNumeroDeTarjeta = document.createElement("input");
    inputNumeroDeTarjeta.id = "numerodetarjeta"
    inputNumeroDeTarjeta.type = "text"
    inputNumeroDeTarjeta.placeholder = "Ingrese su numero de tarjeta aqui"
    numeroDeTarjetaCaja.appendChild(inputNumeroDeTarjeta)


    //Tipo y numero de documento
    let tipoYnumeroDeDocumentoCaja = document.createElement("section");
    cajacontenedora.appendChild(tipoYnumeroDeDocumentoCaja);
    tipoYnumeroDeDocumentoCaja.id = "tipoYnumeroDeDocumentoCaja";

    let labeltipoYnumeroDeDocumento = document.createElement("label");
    tipoYnumeroDeDocumentoCaja.appendChild(labeltipoYnumeroDeDocumento);
    labeltipoYnumeroDeDocumento.textContent = "Tipo y numero de documento: "
    let inputtipoYnumeroDeDocumento = document.createElement("input");
    inputtipoYnumeroDeDocumento.type = "text"
    inputtipoYnumeroDeDocumento.placeholder = "Numero de documento"
    tipoYnumeroDeDocumentoCaja.appendChild(inputtipoYnumeroDeDocumento)

    let selector2 = document.createElement("select");
    selector2.className = "menuTipoDeDocumento"; // nombre de clase más semántico
    tipoYnumeroDeDocumentoCaja.appendChild(selector2);
    for (let a = 0; a < tiposDeDocumentos.length; a++) {
        let opcion = document.createElement("option");
        opcion.textContent = tiposDeDocumentos[a];
        opcion.className = "opcionDelMenuTipoDeDocumento";
        selector2.appendChild(opcion);
    }
    //Clave teclado virtual
    let claveTecladoVirtualCaja = document.createElement("section")
    cajacontenedora.appendChild(claveTecladoVirtualCaja);
    claveTecladoVirtualCaja.className = "claveTecladoVirtualCaja";

    let cajaTecladoVirtual = document.createElement("section");
    cajaTecladoVirtual.className = "tecladoVirtual";
    claveTecladoVirtualCaja.appendChild(cajaTecladoVirtual);

    let arraydenumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let a = 0; a < 10; a++) {
        let indiceRandom = Math.floor(Math.random() * arraydenumeros.length);
        let tecla = document.createElement("button");
        tecla.textContent = arraydenumeros[indiceRandom];
        tecla.className = "teclaTecladoVirtual";
        cajaTecladoVirtual.appendChild(tecla);
        arraydenumeros.splice(indiceRandom, 1);
    }

    // Botón limpiar agregado
    let teclalimpiar = document.createElement("button");
    teclalimpiar.className = "limpiar teclaTecladoVirtual";
    teclalimpiar.textContent = "";
    cajaTecladoVirtual.appendChild(teclalimpiar);

    let cajaInterfazIngreso = document.createElement("div"); //cajaparalainterfazdeingreso
    claveTecladoVirtualCaja.appendChild(cajaInterfazIngreso);
    let CrearCuentaLink = document.createElement("div");
    cajaInterfazIngreso.appendChild(CrearCuentaLink);
    let imagen = document.createElement("img");
    CrearCuentaLink.appendChild(imagen)
    let crearClaveLink = document.createElement("a")
    crearClaveLink.innerText = "Genera tu clave de internet"
    crearClaveLink.href = "https://google.com"
    CrearCuentaLink.appendChild(crearClaveLink)
    let textoInstrucciones = document.createElement("div");
    cajaInterfazIngreso.appendChild(textoInstrucciones);
    textoInstrucciones.textContent = "Ingresa tu clave internet (6 digitos)"
    let clave = document.createElement("input")
    clave.type = "text"
    clave.readOnly = true;
    cajaInterfazIngreso.appendChild(clave)

    let olvideMiClaveDiv = document.createElement("div");
    cajaInterfazIngreso.appendChild(olvideMiClaveDiv);
    let imagen2 = document.createElement("img");
    olvideMiClaveDiv.appendChild(imagen2)
    let olvideMiClaveLink = document.createElement("a")
    olvideMiClaveLink.innerText = "Olvide mi clave"
    olvideMiClaveLink.href = "https://google.com"
    olvideMiClaveDiv.appendChild(olvideMiClaveLink)

    let inputbloqueado = document.createElement("input")
    //Captcha

    let captchaCaja = document.createElement("section");
    cajacontenedora.appendChild(captchaCaja)
    captchaCaja.id = "captchaCaja"
    let textocaptcha = document.createElement("label");
    textocaptcha.textContent = "Ingrese el texto de la imagen:"
    captchaCaja.appendChild(textocaptcha);
    let elcaptcha = document.createElement("p")
    elcaptcha.readOnly = true
    elcaptcha.textContent = "XAND"
    captchaCaja.appendChild(elcaptcha)
    let regenerarCaptchaDiv = document.createElement("div");
    cajaInterfazIngreso.appendChild(regenerarCaptchaDiv);
    cajaInterfazIngreso.className = "cajaInterfazIngreso"
    let imagenreintentar = document.createElement("img");
    olvideMiClaveDiv.appendChild(imagenreintentar)
    let resetearCatcha = document.createElement("a")
    resetearCatcha.innerText = "Regenerar"
    resetearCatcha.href = "https://google.com"
    regenerarCaptchaDiv.appendChild(resetearCatcha)
    captchaCaja.appendChild(regenerarCaptchaDiv)
    let inputdelcaptcha = document.createElement("input")
    inputdelcaptcha.type = "text"
    inputdelcaptcha.id="valordelcaptcha"
    captchaCaja.appendChild(inputdelcaptcha)

    //enviar
    let ingresarboton = document.createElement("button");
    cajacontenedora.appendChild(ingresarboton)
    ingresarboton.id = "enviar"
    ingresarboton.textContent = "Ingresar"

}


function aplicarEstilos() {
    const estilo = document.createElement('style');
    estilo.textContent = `
        * {
            box-sizing: border-box;
            font-family: sans-serif;
        }
        body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: hsl(0 0% 90%);
        }
        #cajacontenedora {
            max-width: 420px;
            width: 100%;
            margin: 20px;
            padding: 20px;
            background: white;
            box-shadow: 0 8px 20px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
        }
        section, .numeroDeTarjetaCaja, .claveTecladoVirtualCaja {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 6px;
            font-weight: 500;
            color: #1e1e2f;
            font-size: 0.9rem;
        }
        input, select {
            width: 100%;
            padding: 12px 14px;
            border: 1.5px solid hsl(0 0% 90%);
            font-size: 1rem;
            background: white;
            transition: border 0.2s;
        }
        input:focus, select:focus {
            border-color: #2a7de1;
            outline: none;
        }
        .tecladoVirtual {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin: 16px 0;
        }
        .teclaTecladoVirtual {
            background: hsl(0 0% 90%);
            border: none;
            padding: 14px 0;
            font-size: 1.6rem;
            font-weight: 600;
            color: #1e1e2f;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            cursor: pointer;
            transition: 0.15s;
            border: 1px solid hsl(0 0% 90%);
        }
        .teclaTecladoVirtual:hover {
            background: hsl(0 0% 80%);
        }
        .teclaTecladoVirtual:active {
            transform: scale(0.96);
            background: hsl(0 0% 97%);
        }
        /* Estilos para el botón limpiar */
        .limpiar {
            grid-column: span 1;
            background: hsl(0, 100%, 83%);
            color: hsl(0, 100%, 50%);
            border-color: hsl(0, 0%, 100%);
            font-size: 1.8rem;
            font-weight: normal;
        }
        .limpiar:hover {
            background: hsl(0, 100%, 79%);
        }
        .limpiar:active {
            background: hsl(0, 100%, 84%);
        }
        a {
            color: #2a7de1;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.9rem;
        }
        a:hover {
            text-decoration: underline;
        }
        #captchaCaja p {
            margin: 8px 0 4px;
            font-weight: 600;
            letter-spacing: 2px;
            background: #e9ecf2;
            display: inline-block;
            padding: 8px 18px;
            border-radius: 30px;
            color: #1e293b;
        }
        .cajaInterfazIngreso div {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 8px 0;
        }
        input[readonly] {
            background: #f7f9fc;
            border: 1.5px dashed #b9c2d0;
            color: #2c3e50;
            font-weight: 500;
            text-align: center;
            letter-spacing: 2px;
        }
        #enviar {
            background: #f4f4f9;
            border: none;
            padding: 14px 0;
            font-size: 1.6rem;
            font-weight: 600;
            color: #1e1e2f;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            cursor: pointer;
            transition: 0.15s;
            border: 1px solid #e0e0e8;
        }
        #enviar:hover {
            background: #e6e9f0;
        }
        #enviar:active {
            transform: scale(0.96);
            background: #d0d5e0;
        }
        .notificacion {
            position: fixed;
            top: -100px;
            left: 50%;
            transform: translateX(-50%);
            min-width: 300px;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            text-align: center;
            font-weight: 500;
            z-index: 1000;
            transition: top 0.4s ease-in-out;
            color: white;
            font-size: 16px;
        }
    `;
    document.head.appendChild(estilo);
}




function habilitarEventos() {
    //Teclado virtual
    const botonesTeclado = document.querySelectorAll('.teclaTecladoVirtual');
    const campoClave = document.querySelector('.cajaInterfazIngreso input[readonly]');
    const botonLimpiar = document.querySelector('.limpiar');

    if (!campoClave) {
        console.warn('No se encontró el campo de la clave.');
        return;
    }

    //numeros
    botonesTeclado.forEach(boton => {
        if (!boton.classList.contains('limpiar')) {
            boton.addEventListener('click', () => {
                const digito = boton.textContent;
                if (campoClave.value.length < 6) {
                    campoClave.value += digito;
                }
            });
        }
    });

    //botonlimpiar
    if (botonLimpiar) {
        botonLimpiar.addEventListener('click', () => {
            campoClave.value = ""
        });
    }

    //botonenviar realiza comprobaciones
    const botonenviar = document.getElementById("enviar");
    botonenviar.addEventListener("click", function () {
        const valordelcaptcha = document.getElementById("valordelcaptcha");
        if(valordelcaptcha.value == "XAND"){
            pushNotification(true)
        }
        else{
            pushNotification(false)
        }
    })

}

function pushNotification(valido) {
    let nuevaNotificacion = document.createElement("div");
    nuevaNotificacion.className = "notificacion";
    
    if (valido) {
        nuevaNotificacion.style.backgroundColor = "rgb(76, 175, 80)";
        nuevaNotificacion.textContent = "Validación exitosa";
    } else {
        nuevaNotificacion.style.backgroundColor = "rgb(244, 67, 54)";
        nuevaNotificacion.textContent = "Error en la validación, verifique los campos";
    }
    
    document.body.appendChild(nuevaNotificacion);
    
    setTimeout(() => {
        nuevaNotificacion.style.top = "20px";
    }, 10);
    
    setTimeout(() => {
        nuevaNotificacion.style.top = "-100px";
        setTimeout(() => {
            if (nuevaNotificacion.parentNode) {
                nuevaNotificacion.parentNode.removeChild(nuevaNotificacion);
            }
        }, 400);
    }, 3000);
}



function iniciarTodo() {
    iniciarEstructura()
    aplicarEstilos()
    habilitarEventos()
}
iniciarTodo()