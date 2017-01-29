app.controller('EtouffementController', function($scope, $state) {
  $scope.avecSons = function() {
    $state.go('avec-sons');
  };

  $scope.sansSons = function() {
    $state.go('sans-sons');
  };
});
