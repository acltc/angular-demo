(function() {
  "use strict";

  angular.module("purpleHippo").controller("fooCtrl", function ($scope) {
    $scope.dogName = function () {
      return $scope.dog;
    }
    $scope.dog = "Max";

    $scope.sum = function() {
      if ($scope.numbers) {
        var numbers = $scope.numbers.split(" ");
        console.log(numbers);
        var sum = 0;
        for(var i = 0; i < numbers.length; i++) {
          sum += parseInt(numbers[i]);
        }
        if(sum) {
          return sum;
        } else {
          return "You have not entered valid numbers."
        }
      }
    }


  });

  
})();