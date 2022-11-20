'use strict';


/**
 * Editar un restaurante
 * Encuentra y edita un restaurante perteneciente a la base de datos a partir de los parámetros empleados 
 *
 * body Restaurant Un Restaurante (optional)
 * aPI_KEY String La llave del API
 * restaurantId String El identificador único de la hamburguesa
 * returns List
 **/
exports.editRestaurant = function(body,aPI_KEY,restaurantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "C. Diez 545, Zona Centro, 22800 Ensenada, B.C.",
  "name" : "Milnovecientos88",
  "restaurantId" : 55543,
  "burgers" : [ {
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
  } ]
}, {
  "address" : "C. Diez 545, Zona Centro, 22800 Ensenada, B.C.",
  "name" : "Milnovecientos88",
  "restaurantId" : 55543,
  "burgers" : [ {
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
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener todos los restaurantes
 * Devuelve todos los restaurantes de la base de datos. 
 *
 * aPI_KEY String La llave del API
 * quantity Integer número máximo de objetos a devolver (optional)
 * returns List
 **/
exports.searchRestaurants = function(aPI_KEY,quantity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "C. Diez 545, Zona Centro, 22800 Ensenada, B.C.",
  "name" : "Milnovecientos88",
  "restaurantId" : 55543,
  "burgers" : [ {
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
  } ]
}, {
  "address" : "C. Diez 545, Zona Centro, 22800 Ensenada, B.C.",
  "name" : "Milnovecientos88",
  "restaurantId" : 55543,
  "burgers" : [ {
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
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener un solo restaurante por identificador
 * Este método obtiene un solo restaurante especificado por su identificador en los parámetros 
 *
 * aPI_KEY String La llave del API
 * restaurantId String El identificador único del restaurante
 * returns List
 **/
exports.searchSingleRestaurant = function(aPI_KEY,restaurantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "C. Diez 545, Zona Centro, 22800 Ensenada, B.C.",
  "name" : "Milnovecientos88",
  "restaurantId" : 55543,
  "burgers" : [ {
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
  } ]
}, {
  "address" : "C. Diez 545, Zona Centro, 22800 Ensenada, B.C.",
  "name" : "Milnovecientos88",
  "restaurantId" : 55543,
  "burgers" : [ {
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
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enviar un nuevo restaurante
 * Añade un restaurante a la base. 
 *
 * body Restaurant  (optional)
 * aPI_KEY String La llave del API
 * returns List
 **/
exports.sendRestaurant = function(body,aPI_KEY) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "C. Diez 545, Zona Centro, 22800 Ensenada, B.C.",
  "name" : "Milnovecientos88",
  "restaurantId" : 55543,
  "burgers" : [ {
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
  } ]
}, {
  "address" : "C. Diez 545, Zona Centro, 22800 Ensenada, B.C.",
  "name" : "Milnovecientos88",
  "restaurantId" : 55543,
  "burgers" : [ {
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
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

