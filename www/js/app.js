// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
     //window.codePush.sync();
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      
    }
  });
})

// .run(function ($ionicPlatform, $cordovaToast, $ionicLoading) {
//     $ionicPlatform.ready(function () {
//         if (window.cordova && window.cordova.plugins.Keyboard) {
//             // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//             // for form inputs)
//             cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
 
//             // Don't remove this line unless you know what you are doing. It stops the viewport
//             // from snapping when text inputs are focused. Ionic handles this internally for
//             // a much nicer keyboard experience.
//             cordova.plugins.Keyboard.disableScroll(true);
//         }
//         if (window.StatusBar) {
//             StatusBar.styleDefault();
//         }
//         window.codePush.sync();
//         // Using custom sync options - user interaction is enabled, custom install mode and download progress callback
//         // window.codePush.sync(
//         //     function (syncStatus) {
//         //         switch (syncStatus) {
//         //             // Result (final) statuses
//         //             case SyncStatus.UPDATE_INSTALLED:
//         //                 hideLoader();
//         //                 $cordovaToast.show('The update was installed successfully.', 'long', 'center');
//         //                 break;
//         //             case SyncStatus.UP_TO_DATE:
//         //                 hideLoader();
//         //                 $cordovaToast.show('The application is up to date.', 'long', 'center');
//         //                 break;
//         //             case SyncStatus.UPDATE_IGNORED:
//         //                 console.log("The user decided not to install the optional update.");
//         //                 break;
//         //             case SyncStatus.ERROR:
//         //                 $cordovaToast.show('An error occured while checking for updates', 'long', 'center');
//         //                 break;
 
//         //             // Intermediate (non final) statuses
//         //             case SyncStatus.CHECKING_FOR_UPDATE:
//         //                 showLoader('Checking for update...');
//         //                 break;
//         //             case SyncStatus.AWAITING_USER_ACTION:
//         //                 console.log("Alerting user.");
//         //                 break;
//         //             case SyncStatus.DOWNLOADING_PACKAGE:
//         //                 console.log("Downloading package.");
//         //                 break;
//         //             case SyncStatus.INSTALLING_UPDATE:
//         //                 showLoader('Installing update...');
//         //                 hideLoader();
//         //                 break;
//         //         }
//         //     },
//         //     {
//         //         updateDialog: false, installMode: InstallMode.IMMEDIATE
//         //     },
//         //     function (downloadProgress) {
//         //         //showLoader("Downloading " + downloadProgress.receivedBytes + " of " + downloadProgress.totalBytes + " bytes.");
//         //         showLoader('Downloading...');
//         //     });
 
//     });
//     //Ionic loader function
//     showLoader = function (content) {
//         $ionicLoading.show(
//             {
//                 template: '<p class="center">' +
//                     '<ion-spinner icon="android"/>' +
//                     '<div>' + content + '</div>' +
//                     '</p>',
//                 animation: 'fade-in',
//                 showBackdrop: true,
//                 maxWidth: 200,
//                 showDelay: 0
//             }
//         );
//     }
 
//     hideLoader = function () {
//         $ionicLoading.hide();
//     }
// })