#  Ejercicio 01 – Teclado Interactivo (JavaScript + Docker)

#  Ejercicio 02 – Calculadora (JavaScript + Docker)



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

---
