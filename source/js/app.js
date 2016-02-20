(function () {
  angular.module('calculator', []).controller('calculatorController', function ($scope, $rootScope) {
    var operationPressed  = false
    var equalsPressed     = false;

    $scope.expression = "";
    $scope.result     = "0";

    $scope.digit = function(num) {
      if($scope.result === "0" || operationPressed) {
        $scope.result = num;
        $scope.expression += $scope.result;
      } else if(equalsPressed) {
        $scope.result = num;
        $scope.expression = $scope.result;
      } else {
        $scope.result += num;
        $scope.expression += num;
      }

      operationPressed  = false;
      equalsPressed     = false;
    };

    $scope.clear = function() {
      $scope.result = "0";
      $scope.expression = "";
      stack = [];
      operationPressed = false;
      equalsPressed = false;
    };

    $scope.operate = function(operand) {
      if(operationPressed) {
        return;
      }else if(equalsPressed) {
        $scope.expression = $scope.result + operand;
        equalsPressed = false;
      } else {
        $scope.expression += operand;
      }
      operationPressed = true;
    };

    $scope.equals = function() {
      var i = 0;

      $scope.result = $rootScope.$eval($scope.expression);
      $scope.expression += "= ";

      equalsPressed = true;
    };

    $scope.sqrt = function() {
      $scope.result = Math.sqrt($scope.expression);
      $scope.expression = "";

      operationPressed = false;
      equalsPressed = false;
    };

    $scope.square = function() {
      $scope.result = Math.pow($scope.expression, 2);
      $scope.expression = "";

      operationPressed = false;
      equalsPressed = false;
    };

    $scope.backspace = function() {
      var newValue = $scope.expression.slice(0, $scope.expression.length - 1);
      $scope.expression = newValue;
      $scope.result = newValue;
    };
  });
}.call(this));
