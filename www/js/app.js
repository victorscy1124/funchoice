angular.module('starter', ['ionic', 'starter.controllers'])
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
  		  if(window.cordova && window.cordova.plugins.Keyboard) {
  			   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
           cordova.plugins.Keyboard.disableScroll(true);
  		  }
  		  if(window.StatusBar) {
  			   StatusBar.styleDefault();
  		  }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('portal', {
      	url: '/portal',
      	templateUrl: 'templates/portal.html',
      	controller: 'PortalCtrl'
  	})

  	.state('banner/:bannerIndex', {
      	url: '/banner/:bannerIndex',
      	templateUrl: 'templates/banner.html',
      	controller: 'BannerCtrl'
  	})

  	.state('signin', {
      	url: '/signin',
      	templateUrl: 'templates/signin.html',
      	controller: 'SigninCtrl'
  	})

    .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
    })

    .state('mainboard', {
        url: '/mainboard',
        abstract: true,
        templateUrl: 'templates/mainboard.html'
    })

    .state('mainboard.home', {
        url: '/home',
        views: {
            'mainboard-home': {
                templateUrl: 'templates/mainboard-home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('mainboard_home_explore', {
        url: '/mainboard/home/explore',
        templateUrl: 'templates/mainboard-home-explore.html',
        controller: 'HomeExploreCtrl'
    })

    .state('mainboard.me', {
        url: '/me',
        views: {
            'mainboard-me': {
                templateUrl: 'templates/mainboard-me.html',
                controller: 'MeCtrl'
            }
        }
    })

    .state('mainboard_me_info', {
        url: '/mainboard/me/info',
        templateUrl: 'templates/mainboard-me-info.html',
        controller: 'MeInfoCtrl'
    })

    $urlRouterProvider.otherwise('/portal');
});
