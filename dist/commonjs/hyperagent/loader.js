"use strict";
var config = require("hyperagent/config").config;

function loadAjax(options) {
  var deferred = config.defer();
  if (options.headers) {
    config._.extend(options.headers, {
      'Accept': 'application/hal+json, application/json, */*; q=0.01',
      'X-Requested-With': 'XMLHttpRequest'
    });
  }
  config.ajax(config._.extend({
    success: deferred.resolve,
    error: deferred.reject
  }, options));

  return deferred.promise;
}

exports.loadAjax = loadAjax;