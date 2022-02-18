# Saltos de Línea App

Esta aplicación surge del desafío originado en un grupo de programadores, en el cual se brindó la consigna de desarrollar un código que permita mostrar en consola un texto largo, al que cada determinado número de caracteres (100) debía ingresarse un espacio sin cortar la palabra, por tanto, el espacio debía ingresarse en el lugar libre posterior a dicha palabra. De esta manera, podía suceder que el primer espació se incerte a los 100 caracteres y el segundo a los 205, justamente para no cortar la palabra.

En lo personal, me compenetré en el reto y decidí ir más allá. Diseñé una función con el objetivo de que el usuario pueda enviar como input un parámetro con el texto en el cual se desean insertar los saltos de línea, y luego, a su vez, pueda remitir la cantidad de caracteres pasado los cuales (sin cortar la palabra) se desea insertar el salto de línea.

El código contempla los caracteres de las palabras que conforman el texto y los espacios entre palabras, dado que son caracteres originales presentes en el texto que se envía como argumento a la función, ignorando los caracteres de salto de línea que se incorporan posteriormente, dado que dichos caracteres no forman parte del texto original.

Para apreciar el correcto funcionamiento del código, se han programado console log que van indicando el número total de caracteres pasado los cuales se inserta el salto de línea.

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```

Ese comando descargará todos los módulos de node necesarios para ejecutar el programa.

* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

Para visualizar la consola de desarrollador, estando en la ventana del navegador, presionar a la vez las teclas Ctrl + Shift + i

Les dejo un link para que puedan revisar el resultado del código con texto al cual se le aplican saltos de línea cada 50 caracteres o número mayor sin cortar la palabra: https://gabrieldp36.github.io/saltos-linea-app/