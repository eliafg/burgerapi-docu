'use strict';


/**
 * Editar una reseña
 * Se encuentra y edita una reseña para editar en la base. 
 *
 * body Review Una reseña completa (optional)
 * aPI_KEY String La llave del API
 * reviewId String El identificador único de la hamburguesa
 * returns List
 **/
exports.editReview = function(body,aPI_KEY,reviewId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
}, {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener las últimas 10 reseñas
 * Se obtienen las últimas 10 reseñas por fecha de reseña 
 *
 * aPI_KEY String La llave del API
 * returns List
 **/
exports.searchLatestReviews = function(aPI_KEY) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
}, {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener todas las reseñas por restaurante
 * Se obtienen todas las reseñas de un restaurante en específico 
 *
 * aPI_KEY String La llave del API
 * restaurantId String El identificador único del restaurante
 * returns List
 **/
exports.searchReviewByRestaurant = function(aPI_KEY,restaurantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
}, {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener todas las reseñas
 * Este método obtiene la cantidad de reseñas especificadas por los parámetros del request 
 *
 * aPI_KEY String La llave del API
 * quantity Integer Cantidad de hamburguesas a llamar (optional)
 * returns List
 **/
exports.searchReviews = function(aPI_KEY,quantity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
}, {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener una reseña por identificador
 * Se obtiene una entrada de reseña especificada por los parámetros. 
 *
 * aPI_KEY String La llave del API
 * reviewId String El identificador único de la reseña
 * returns List
 **/
exports.searchSingleReview = function(aPI_KEY,reviewId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
}, {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enviar una nueva reseña
 * Este método añade una reseña a la base. 
 *
 * body Review Una reseña completa (optional)
 * aPI_KEY String La llave del API
 * returns List
 **/
exports.sendReview = function(body,aPI_KEY) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
}, {
  "score" : 0.40041409523050575,
  "burger" : "",
  "dateReviewed" : "2016-08-29T09:12:33.001Z",
  "comment" : "Esta hamburguesa presenta buen sabor, sin embargo, la manera en que fue preparada hace que el pan se vuela aguado",
  "reviewId" : 55543
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

