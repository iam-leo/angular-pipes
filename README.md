# 🅰 Angular Pipes

Este proyecto es una aplicación de Angular que muestra el resultado del uso de diferentes pipes integrados en Angular, así como pipes personalizados.

## 📋 Tabla de Contenidos

- [Introducción](#introducción)
- [Acceso a la Aplicación](#acceso-a-la-aplicación)
- [Pipes Integrados en Angular](#pipes-integrados-en-angular)
- [Pipes Personalizados en la App](#pipes-personalizados-en-la-app)

## ▶ Introducción

Los pipes en Angular son una herramienta poderosa para la transformación de datos en la interfaz de usuario. Este proyecto proporciona una aplicación que muestra el efecto de los pipes integrados, como `DatePipe`, `CurrencyPipe`, `DecimalPipe`, y otros, así como de pipes personalizados.

## 🌐 Acceso a la Aplicación

La aplicación está desplegada en GitHub Pages y se puede acceder directamente a través del siguiente enlace:

🔗 [Angular Pipes](https://iam-leo.github.io/angular-pipes/)

No es necesario clonar el repositorio ni levantar un servidor localmente. Simplemente visita el enlace y explora los diferentes ejemplos de pipes en acción.

## 🔁 Pipes Integrados en Angular

La aplicación muestra los resultados de varios pipes integrados en Angular, incluyendo:

### Pipes Comunes

1. **UpperCasePipe**: Convierte el texto en mayúsculas.
2. **LowerCasePipe**: Convierte el texto en minúsculas.
3. **TitleCasePipe**: Convierte el texto a "Title Case" (mayúsculas iniciales).
4. **DatePipe**: Muestra diferentes formatos de fecha.
5. **NumberPipe**: Formatea un número simple, o decimal pudiendo indicarle cuantos numeros decimales requerimos.
6. **CurrencyPipe**: Formatea un valor numérico como moneda.
7. **PercentPipe**: Formatea números como porcentajes.


### Pipes Menos Comunes

1. **I18nSelectPipe**: Muestra un valor basado en una tabla de internacionalización.
2. **I18nPluralPipe**: Selecciona un texto de pluralización basado en un conteo.
3. **SlicePipe**: Devuelve una subcadena o subarreglo (similar a `Array.slice()`).
4. **JsonPipe**: Convierte un objeto o valor a formato JSON.
5. **KeyValuePipe**: Transforma un objeto o mapa en un arreglo de pares clave-valor, útil para iterar sobre objetos.
6. **AsyncPipe**: Desenvuelve y muestra valores de Promises y Observables automáticamente.

## 🔂 Pipes Personalizados en la App

Además de los pipes integrados, la aplicación incluye ejemplos de pipes personalizados que muestran cómo pueden transformar datos en diferentes formas:

- **ToggleCasePipe**: convierte una cadena de texto a mayúsculas o mínusculas.
- **SortBy**: Para el ejemplo utilizado, ordena una lista de superheroes por nombre, por si pueden volar o por color.
- **CanFly**: recibe un valor booleano y devuele "Fly!" para valores **_true_** y "Do not Fly!" para valores **_false_**.
- **ColorName**: recibe un valor "Color" de una interface (un número) y devuele el nombre del color.

## 🖼 Tecnologías utilizadas



[![project teach](https://skillicons.dev/icons?i=angular,tailwind,typescript,prime-ng)](https://skillicons.dev)<img src="https://miro.medium.com/v2/resize:fit:800/1*hNpbTpVjFsUEzvVCn_3jEg.png" width="120" height="50">

