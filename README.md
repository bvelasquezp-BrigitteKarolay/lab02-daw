#  Ejercicio 01 – Teclado Interactivo (JavaScript + Docker)

#  Ejercicio 02 – Calculadora (JavaScript + Docker)

## Descripción

En este ejercicio se implementa una calculadora básica similar a la que se encuentra en algunos sistemas operativos.  
El desarrollo se realizó con *JavaScript nativo, generando la interfaz de manera dinámica mediante el **DOM*.

La calculadora permite:

- Ingresar operaciones matemáticas básicas.
- Usar paréntesis para agrupar expresiones.
- Evaluar la expresión ingresada mediante la función eval().
- Eliminar caracteres o limpiar por completo la operación.
- Guardar cada operación realizada en una *pila* para mostrar el historial.

---

## 📁 Estructura del proyecto

```bash
EJERCICIO02/
├── Dockerfile
└── lab02/
    ├── ejercicio02.html
    ├── css/
    │   └── estilo.css
    └── js/
        ├── ejercicio02.js
        └── ejercicio02.min.js
```

---

## Funcionamiento de la calculadora
1. Al abrir la página, la interfaz de la calculadora se construye automáticamente con JavaScript.
2. El usuario puede presionar los botones numéricos y operativos para formar una expresión.
3. Cada botón agrega su valor a la variable que almacena la operación actual.
4. Al presionar = o Evaluar, la expresión se procesa con eval().
5. El resultado aparece en la pantalla principal.
6. Cada operación resuelta se guarda en una pila.
7. El historial se muestra en la parte derecha de la interfaz, ordenado desde la operación más reciente.

## Operaciones disponibles

La calculadora incluye los siguientes botones:

* AC: limpia toda la operación.
* C: borra la expresión actual.
* ←: elimina el último carácter ingresado.
* ÷: división.
* x: variable utilizada en la interfaz.
* y: variable utilizada en la interfaz.
* ( y ): paréntesis.
* Números del 0 al 9
* .: punto decimal.
* =: evalúa la expresión.
* Evaluar: realiza la misma función que =.

## Uso de eval()

Para resolver las expresiones matemáticas se utiliza la función eval(), que permite interpretar el texto ingresado como una operación de JavaScript.

Antes de evaluar, el símbolo ÷ se reemplaza por / para que la operación pueda ejecutarse correctamente.

Ejemplo:

let resultado = eval(expresion.replace("÷", "/"));

## Uso de la pila para el historial

Cada operación resuelta se guarda en un arreglo llamado pila.

Ejemplo:
```
pila.push(expresion + " = " + resultado);
```
Luego, el historial se muestra recorriendo la pila en orden inverso para que la operación más reciente aparezca primero.

Esto permite conservar un registro de los cálculos realizados durante la sesión.

## Diseño de la interfaz

El diseño se construyó con CSS usando:

Fondo general gris claro.
Pantalla principal oscura.
Botones con colores diferentes según su función.
Distribución en forma de cuadrícula para simular una calculadora real.

Las clases de color utilizadas son:

.rojo
.naranja
.azul
.morado
.numero
.verde

## Configuración con Docker (Ubuntu + Apache)

```
Dockerfile
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y apache2 && \
    echo "ServerName localhost" >> /etc/apache2/apache2.conf

COPY lab02 /var/www/html/lab02

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]

```

---

## Ejecución del proyecto

1. Construir la imagen
docker build -t calculadora .
2. Ejecutar el contenedor
docker run -d -p 8080:80 calculadora
3. Abrir en el navegador
http://127.0.0.1:8080/lab02/ejercicio02.html

## Versión del código

El proyecto cuenta con dos versiones del archivo JavaScript:

* `ejercicio02.js` → versión desarrollo (legible)
* `ejercicio02.min.js` → versión producción (ofuscada)

El HTML carga la versión ofuscada:

```html
<script src="js/ejercicio03.min.js"></script>
```

---
## Consideraciones técnicas
* La interfaz se genera dinámicamente usando document.createElement().
* No se utiliza ningún framework.
* Se trabaja con JavaScript puro.
* La lógica está separada de los estilos y de la estructura HTML.
* Se guarda un historial de operaciones mediante una pila.
* La calculadora evalúa expresiones simples y compuestas con eval().

# Ejercicio 03 – Juego del Ahorcado (JavaScript + Canvas + Docker)

## Descripción

En este ejercicio se implementa una versión del juego **“El Ahorcado”** utilizando **JavaScript nativo**, donde toda la interfaz se genera dinámicamente mediante el DOM.

El juego permite:

* Seleccionar una palabra aleatoria (contexto arequipeño)
* Interactuar mediante botones (`onclick`)
* Dibujar progresivamente el ahorcado usando **Canvas**
* Detectar automáticamente victoria o derrota

---
## Estructura del proyecto

```
EJERCICIO03/
├── Dockerfile
└── lab02/
    ├── ejercicio03.html
    ├── css/
    │   └── estilos.css
    └── js/
        ├── ejercicio03.js
        └── ejercicio03.min.js
```

---

## Funcionamiento del juego

1. El usuario presiona **“Iniciar Juego”**
2. Se selecciona una palabra aleatoria
3. Se generan botones con letras del abecedario
4. Al hacer clic:

   * Si acierta → se muestra la letra
   * Si falla → se dibuja una parte del ahorcado en canvas
5. El juego termina cuando:

   * Adivina la palabra
   * Completa los 10 errores

---

## Uso de Canvas

El canvas se utiliza para dibujar progresivamente el ahorcado:

* Base
* Poste vertical
* Poste horizontal
* Cuerda
* Cabeza (círculo con `arc`)
* Cuerpo
* Brazos
* Piernas

Cada error ejecuta:

```javascript
errores++;
dibujar(errores);
```

---

## Configuración con Docker (Ubuntu + Apache)

### Dockerfile

```dockerfile
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y apache2 && \
    echo "ServerName localhost" >> /etc/apache2/apache2.conf

COPY lab02 /var/www/html/lab02

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
```

---

## Pasos para ejecutar el proyecto

### 1. Construir la imagen

```bash
docker build -t lab02ejercicio03 .
```

---

### 2. Ejecutar el contenedor

```bash
docker run -d -p 8080:80 lab02ejercicio03
```

---

### 3. Acceder en el navegador

```
http://127.0.0.1:8080/lab02/ejercicio03.html
```

---

## Versiones del código

* `ejercicio03.js` → versión desarrollo (legible)
* `ejercicio03.min.js` → versión producción (ofuscada)

El HTML carga la versión ofuscada:

```html
<script src="js/ejercicio03.min.js"></script>
```

---

## Consideraciones técnicas

* Todo el contenido HTML se genera dinámicamente (DOM)
* No se utiliza ningún framework
* Se sigue el patrón de uso de canvas visto en laboratorio
* Se separa lógica, estilos y estructura

---

## Control de versiones (Git)

El desarrollo se realizó utilizando ramas:

* `ejercicio01`
* `ejercicio02`
* `ejercicio03`

Cada integrante trabajó en una rama independiente, permitiendo una mejor organización del proyecto.

---

## Evidencia de los tres proyectos

Se incluye un video demostrando:

* Construcción del contenedor
* Ejecución del servidor
* Funcionamiento del juego


---

## Conclusión

* Se logró implementar aplicaciones web interactivas utilizando JavaScript nativo, sin necesidad de frameworks.
* El uso del DOM dinámico permitió crear interfaces completas desde el código, facilitando la manipulación de elementos en tiempo real.
* La integración de eventos (onclick) fue fundamental para la interacción del usuario en los tres ejercicios.
* El uso de Canvas permitió representar gráficamente el juego del ahorcado, aplicando los conceptos vistos en laboratorio.
* La utilización de Docker con Ubuntu y Apache facilitó el despliegue del proyecto en un entorno controlado y reproducible.
* El uso de Git y ramas (branches) permitió organizar el trabajo en equipo y mantener un control de versiones adecuado.
* Se logró separar correctamente estructura (HTML), estilo (CSS) y lógica (JavaScript), mejorando la organización del código.

---
