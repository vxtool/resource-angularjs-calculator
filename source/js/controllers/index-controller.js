(function() {
  'use strict';

  angular
  .module('calculator')
  .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', ];

  function IndexController($scope) {
    var vm = this;
  }
})();
