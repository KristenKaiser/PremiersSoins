app.controller('CardiaqueAvecRespirationController', function($scope, ImageData) {
  $scope.image = ImageData;

  var source = new Image();
  source.addEventListener('load', function() {
    canvas.width = source.width;
    canvas.height = source.height;
    context.drawImage(source, 0, 0);
  });
  source.src = $scope.image.imgURI;

  /*$scope.detect = function() {

    var options = new FileUploadOptions();
    options.fileKey="ffile";
    options.fileName=$scope.image.data.substr($scope.image.data.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";
    var params = {};
    //params.other = obj.text; // some other POST fields
    options.params = params;

    $cordovaToast.showLongBottom('Sending request for detection...');
    var ft = new FileTransfer();
    ft.upload($scope.image.data, encodeURI('http://sakiiir.eu/psg.php'), function(res) {
      //$cordovaToast.showLongBottom('Detection done !');
      $cordovaToast.showLongBottom(res);
    }, function(err) {
      $cordovaToast.showShortBottom(err.message);
    }, options);
  };

  $ionicPlatform.ready(function() {
    console.log("Calling detect");
    $scope.detect();
  });*/

});
