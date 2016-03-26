angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.agenda', {
    url: '/agenda',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agenda.html',
        controller: 'agendaCtrl'
      }
    }
  })

  .state('menu.speakers', {
    url: '/speakers',
    views: {
      'side-menu21': {
        templateUrl: 'templates/speakers.html',
        controller: 'speakersCtrl'
      }
    }
  })

  .state('menu.sponsors', {
    url: '/sponsors',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sponsors.html',
        controller: 'sponsorsCtrl'
      }
    }
  })

  .state('menu.prizes', {
    url: '/prizes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prizes.html',
        controller: 'prizesCtrl'
      }
    }
  })

  .state('menu.venue', {
    url: '/venue',
    views: {
      'side-menu21': {
        templateUrl: 'templates/venue.html',
        controller: 'venueCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});