
# Weather Flow App

## Introduction

> En éste repositorio se encuentra la resolución de un ejercicio práctico donde se ponen en práctica diversas técnicas de desarrollo frontend con react para la realización de una App que hace consultas climáticas de  la ciudad actual y otras ciudades seleccionables.

## Libraries and plugins 

  para la realización de la app opté por utilizar:


* [Webpack](https://webpack.js.org/) para la configuraciòn del modo desarrollo y la creaciòn de bundles minificados en modo productivo, la carga de diversos plugins útiles para el desarrollo.
*  [Babel](https://babeljs.io//) como transpilador  de código y así poder usar las ultimas funcionalidades de ECMAScript6.
* [Bootstrap](https://getbootstrap.com/) para el diseño de la grilla y manejo de  estilos.
* [Openweathermap](https://openweathermap.org/api) api externa para consultas del clima.


## Installation


> 
1. Install Dependencies:
* `npm install`

2. run App:
* `npm start`
> 	*// localhost:8080*

3. production build:
 * `npm run-script build`

## To Do

Seguir trabajando en los test unitarios y de integración, hasta ahora el proyecto cuenta con un entorno de testing configurado utilizando jest y enzyme que realizan pruebas sobre partes del renderizado de los componentes, faltaría aplicarlo a los casos de fetch con algun modulo de mockeo para tales fines.

comando de testeo:
 * `npm test`
