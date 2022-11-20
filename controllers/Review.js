'use strict';

var utils = require('../utils/writer.js');
var Review = require('../service/ReviewService');

module.exports.editReview = function editReview (req, res, next, body, aPI_KEY, reviewId) {
  Review.editReview(body, aPI_KEY, reviewId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchLatestReviews = function searchLatestReviews (req, res, next, aPI_KEY) {
  Review.searchLatestReviews(aPI_KEY)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchReviewByRestaurant = function searchReviewByRestaurant (req, res, next, aPI_KEY, restaurantId) {
  Review.searchReviewByRestaurant(aPI_KEY, restaurantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchReviews = function searchReviews (req, res, next, aPI_KEY, quantity) {
  Review.searchReviews(aPI_KEY, quantity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchSingleReview = function searchSingleReview (req, res, next, aPI_KEY, reviewId) {
  Review.searchSingleReview(aPI_KEY, reviewId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendReview = function sendReview (req, res, next, body, aPI_KEY) {
  Review.sendReview(body, aPI_KEY)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
