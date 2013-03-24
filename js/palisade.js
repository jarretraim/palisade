'use strict';

var palisade = angular.module('palisade', []);

palisade.config(function($routeProvider) {

  $routeProvider.
    when('/', {
      controller: 'PalisadeCtrl',
      templateUrl: 'views/palisade.html'
    });

});