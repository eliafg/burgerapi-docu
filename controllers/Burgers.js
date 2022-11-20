'use strict';

var utils = require('../utils/writer.js');
var Burgers = require('../service/BurgersService');

module.exports.editBurgers = function editBurgers (req, res, next, body, aPI_KEY, burgerId) {
  Burgers.editBurgers(body, aPI_KEY, burgerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchBurgers = function searchBurgers (req, res, next, aPI_KEY, quantity) {
  Burgers.searchBurgers(aPI_KEY, quantity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchSingleBurger = function searchSingleBurger (req, res, next, aPI_KEY, burgerId) {
  Burgers.searchSingleBurger(aPI_KEY, burgerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendBurger = function sendBurger (req, res, next, body, aPI_KEY) {
  Burgers.sendBurger(body, aPI_KEY)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
