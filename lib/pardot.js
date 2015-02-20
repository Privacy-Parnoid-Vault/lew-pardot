var Q = require('q');
var Hoek = require('hoek');

function PardotAPI (options) {
  var deferred = Q.defer();

  options = options || {};

  Hoek.assert(options.userKey, 'userKey must be specified');
  Hoek.assert(options.email, 'email must be specified');
  Hoek.assert(options.password, 'password must be specified');


  return deferred.promise;
}

module.exports = PardotAPI;