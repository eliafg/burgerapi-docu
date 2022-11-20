'use strict';


/**
 * Editar una hamburguesa
 * Este método encontrará y editará la hamburguesa establecida por los parámetros. 
 *
 * body Burger La hamburguesa y sus propiedades (optional)
 * aPI_KEY String La llave del API
 * burgerId String El identificador único de la hamburguesa
 * returns List
 **/
exports.editBurgers = function(body,aPI_KEY,burgerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : 1.0800828190461012,
  "name" : "Hamburguesa Clásica",
  "meat" : "Carne",
  "style" : "Texana",
  "restaurantId" : 55543,
  "burgerId" : 234
}, {
  "price" : 1.0800828190461012,
  "name" : "Hamburguesa Clásica",
  "meat" : "Carne",
  "style" : "Texana",
  "restaurantId" : 55543,
  "burgerId" : 234
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener todas las hamburguesas
 * Llamar este método devolverá todas las hamburguesas en forma de arreglo. 
 *
 * aPI_KEY String La llave del API
 * quantity Integer Cantidad de hamburguesas a llamar (optional)
 * returns List
 **/
exports.searchBurgers = function(aPI_KEY,quantity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : 1.0800828190461012,
  "name" : "Hamburguesa Clásica",
  "meat" : "Carne",
  "style" : "Texana",
  "restaurantId" : 55543,
  "burgerId" : 234
}, {
  "price" : 1.0800828190461012,
  "name" : "Hamburguesa Clásica",
  "meat" : "Carne",
  "style" : "Texana",
  "restaurantId" : 55543,
  "burgerId" : 234
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener una única hamburguesa
 * Llamar este método devolverá una solo hamburguesa a partir del identificador 
 *
 * aPI_KEY String La llave del API
 * burgerId String El identificador único de la hamburguesa
 * returns List
 **/
exports.searchSingleBurger = function(aPI_KEY,burgerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : 1.0800828190461012,
  "name" : "Hamburguesa Clásica",
  "meat" : "Carne",
  "style" : "Texana",
  "restaurantId" : 55543,
  "burgerId" : 234
}, {
  "price" : 1.0800828190461012,
  "name" : "Hamburguesa Clásica",
  "meat" : "Carne",
  "style" : "Texana",
  "restaurantId" : 55543,
  "burgerId" : 234
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Agrega una nueva hamburguesa
 * Agrega una nueva hamburguesa a la base de datos
 *
 * body Burger La hamburguesa y sus propiedades (optional)
 * aPI_KEY String La llave del API
 * no response value expected for this operation
 **/
exports.sendBurger = function(body,aPI_KEY) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

