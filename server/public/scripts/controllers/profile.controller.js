app.controller('ProfileController', ['$http', 'AuthFactory', '$mdDialog', function($http, AuthFactory, $mdDialog) {
  console.log('ProfileController running');
  var self = this;
  // var userStatus = AuthFactory.userStatus;
  var isMentor = false;
  var isStudent = false;

  self.userStatus = AuthFactory.userStatus;

  self.imagePath = '../server/public/assets/images/cooldog.jpeg';

  self.createMessage = function(ev) {
    $mdDialog.show({
      controller: 'MessageController as message',
      templateUrl: '../../views/message-modal.html',
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };


  /**
  Copyright 2016 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
  **/

}]);
