angular.module('starter.controllers', [])

.controller('PortalCtrl', function($scope, $state) {
	$scope.showBanner = function(item) {
        $state.go('banner/:bannerIndex', {'bannerIndex':item});
    };
})

.controller('BannerCtrl', function($scope, $stateParams, $state) {
	$scope.data = {
        acriveSlide: $stateParams.bannerIndex
    };

    $scope.showSignin = function(){
    	$state.go('signin');
    }

    $scope.showSignup = function(){
        $state.go('signup');
    }

	$scope.backPortal = function() {
        $state.go('portal');
    };
})

.controller('SigninCtrl', function($scope, $state, $ionicViewSwitcher) {
    $scope.showSignup = function(){
        $state.go('signup');
    }

    $scope.showMainBoard = function(){
        $ionicViewSwitcher.nextDirection('center');
        $state.go('mainboard.home');
    }
})

.controller('SignupCtrl', function($scope, $state) {
    $scope.showSignin = function(){
        $state.go('signin');
    }
})

.controller('HomeCtrl', function($scope) {
})

.controller('MeCtrl', function($scope, $state, $ionicViewSwitcher) {
    $scope.showSignin = function(){
        $ionicViewSwitcher.nextDirection('back');
        $state.go('signin');
    }
})

.controller('MeInfoCtrl', function($scope, $ionicNavBarDelegate) {
})

.controller('HomeExploreCtrl', function($scope, $ionicNavBarDelegate) {
})

