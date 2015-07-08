var app=angular.module('starter', ['ionic'])
    .config(function($ionicConfigProvider)
    {if(ionic.Platform.isAndroid())$ionicConfigProvider.scrolling.jsScrolling(true);
    })
 //--------------------------------------Routing code--------------------------------------------
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Login')//Login Default

    $stateProvider
        .state('Home', {
            url: '/Home',
            //abstract: true,
            templateUrl: 'template/Home.html',
            controller:'MenuController'
    })
        //url to go login form
        .state('Login', {
        url: '/Login',
        templateUrl: 'template/Login.html',
        controller:'loginController'
    })
        //url to go home page
    //    .state('sideMenu.Home',{
    //        url: "/Home",
    //        views: {
    //            'menuContent': {
    //                templateUrl: "template/Home.html"
    //            }
    //        }
    //})
        //url to go gallery page
        .state('Gallery',{
            url:'/Gallery',
            templateUrl:'template/Gallery.html'
    })
        //url to go camera page
        .state('Camera',{
            url:'/Camera',
            templateUrl:'template/Camera.html'
    })
})

//----------------------------------menu open code-----------------------------------------
  app.controller('MenuController',function($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft=function () {
            $ionicSideMenuDelegate.toggleLeft();
        }
        $scope.toggleRight=function () {
            $ionicSideMenuDelegate.toggleRight();
        }
    })
//------------------------------------model open code--------------------------------------------
//app.controller('MainCtrl', function($scope, $ionicModal) {
//
//    $ionicModal.fromTemplateUrl('template/UserView.html', function(modal) {
//        $scope.UserView = modal;
//    }, {
//        scope: $scope,
//        animation: 'slide-in-up'
//    }).then(function(modal) {
//        $scope.modal = modal
//        console.log('clock');
//    })
//
//    $scope.openModal = function() {
//        $scope.modal.show()
//    }
//
//    $scope.closeModal = function() {
//        $scope.modal.hide();
//    };
//
//    $scope.$on('$destroy', function() {
//        $scope.modal.remove();
//    });
//})

app.controller("MyCtrl", function($scope) {

    $scope.images = [];
    $scope.loadImages = function() {
        for(var i = 1; i <9; i++) {
            $scope.images.push({id: i, src: "img/"+i+".png"});
        }
    }
});

//--------------------------login form controller code-------------------------------------------
app.controller('loginController', function($scope, $state, $ionicPopup) {

    $scope.signIn = function(user) {
        var pass = user.password;
        var un   = user.username;
        if (un=='admin' && pass=='admin123')  {
            //console.log('Sign-In', pass, un);
            $state.go('Home');
            //$state.closeModal();
        }
        else {
            console.log('error');
            $ionicPopup.alert({
                title: 'Enter your Correct UserName & Password'
            }).then(function (password) {
                // You have the password now
            });
        }
        //
    };
})


//----------------------------------------------------------------------------------------------------------
//.run(function($ionicPlatform) {
//  $ionicPlatform.ready(function() {
//    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//    // for form inputs)
//    if(window.cordova && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//    }
//    if(window.StatusBar) {
//      StatusBar.styleDefault();
//    }
//  });
//})
