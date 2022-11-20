'use strict';

var utils = require('../utils/writer.js');
var Restaurant = require('../service/RestaurantService');

module.exports.editRestaurant = function editRestaurant (req, res, next, body, aPI_KEY, restaurantId) {
  Restaurant.editRestaurant(body, aPI_KEY, restaurantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchRestaurants = function searchRestaurants (req, res, next, aPI_KEY, quantity) {
  Restaurant.searchRestaurants(aPI_KEY, quantity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchSingleRestaurant = function searchSingleRestaurant (req, res, next, aPI_KEY, restaurantId) {
  Restaurant.searchSingleRestaurant(aPI_KEY, restaurantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendRestaurant = function sendRestaurant (req, res, next, body, aPI_KEY) {
  Restaurant.sendRestaurant(body, aPI_KEY)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
