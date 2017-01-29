app.controller('HeartController', function($scope, $state) {
  $scope.avecRespiration = function() {
    $state.go('avec-respiration');
  };

  $scope.sansRespiration = function() {
    $state.go('sans-respiration');
  };
});
