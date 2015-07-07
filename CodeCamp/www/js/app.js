var app=angular.module('starter', ['ionic'])
//----------------------------------menu open code-----------------------------------------
  app.controller('MainCtrl',function($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft=function () {
            $ionicSideMenuDelegate.toggleLeft();
        }
        $scope.toggleRight=function () {
            $ionicSideMenuDelegate.toggleRight();
        }
    })
//------------------------------------model open code--------------------------------------------
app.controller('MainCtrl', function($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('template/UserView.html', function(modal) {
        $scope.UserView = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal
        console.log('clock');
    })

    $scope.openModal = function() {
        $scope.modal.show()
    }

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
})


//----------------------------------------------------------------------------------------------------------
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
