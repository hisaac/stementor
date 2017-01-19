app.controller('ProfileController', ['$http', '$mdDialog', 'BioFactory', 'AuthFactory', function($http, $mdDialog, BioFactory, AuthFactory) {
  console.log('ProfileController running');

  var self = this;
  // var userStatus = AuthFactory.userStatus;
  var isMentor = false;
  var isStudent = false;

  self.userStatus = AuthFactory.userStatus;

  // Not currently used
  self.states = (
    'AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV ' +
    'WI WY'
  ).split(' ').map(function(state) {
    return {
      abbrev: state
    };
  });

  // This is an object containing all of mentor's fields
  self.mentor = BioFactory.mentorBio.info;

  self.createMessage = function(ev) {
    console.log('profile controller self.userStatus: ', self.userStatus);
    if(self.userStatus.isLoggedIn) {
      $mdDialog.show({
        controller: 'MessageController as message',
        templateUrl: '../../views/message-modal.html',
        targetEvent: ev,
        clickOutsideToClose: true
      });
    } else {
      $mdDialog.show({
        controller: 'WarningController as warning',
        templateUrl: '../../views/warning-modal.html',
        targetEvent: ev,
        clickOutsideToClose: true
      });
    }

  };

  BioFactory.getProfiles();

}]);
