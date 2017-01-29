app.controller('CameraController', function($scope, $cordovaCamera, $window, $cordovaToast, ImageData, $state) {
  $scope.iframeHeight = $window.innerHeight - 70;
  $scope.iframeWidth = $window.innerWidth - 100;
  $scope.image = ImageData;

  $scope.takePicture = function () {

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true,
      targetWidth: $window.innerWidth,
      targetHeight: $window.innerHeight
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.image.data = imageData;
      $scope.image.imgURI = "data:image/jpeg;base64," + imageData;

      var canvas = document.getElementById('opCanvas');
      var context = canvas.getContext('2d');

      var source = new Image();
      source.addEventListener('load', function() {
        canvas.width = source.width;
        canvas.height = source.height;
        context.drawImage(source, 0, 0);

        $cordovaToast.showShortBottom("Calcul de la procédure en cours...");
      });
      source.src = $scope.image.imgURI;

    }, function(err) {
      $cordovaToast.showShortBottom(err.message);
    });

  };

  $scope.goTo = function(stateName) {
    $state.go(stateName);
  };
});
