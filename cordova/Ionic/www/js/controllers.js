angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ColorsCtrl', function($scope) {
  $scope.colors = [
    { hex: '#FFF', rgb: '255,255,255' },
    { hex: '#000', rgb: '0,0,0' }
  ];

  function byte2Hex(n)
  {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }
  function RGB2Color(r,g,b)
  {
    return byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  }
  function makeColorGradient(frequency1, frequency2, frequency3,
                             phase1, phase2, phase3,
                             center, width, len)
  {
    if (center == undefined)   center = 128;
    if (width == undefined)    width = 127;
    if (len == undefined)      len = 50;

    var colors = [];
    for (var i = 0; i < len; ++i)
    {
       var red = Math.sin(frequency1*i + phase1) * width + center;
       var grn = Math.sin(frequency2*i + phase2) * width + center;
       var blu = Math.sin(frequency3*i + phase3) * width + center;
       colors.push({
          hex: RGB2Color(red,grn,blu),
          rgb: red + ',' + grn + ',' + blu
        });
    }
    return colors;
  }

  var redFrequency = .1;
      grnFrequency = .2;
      bluFrequency = .3;
      center = 128;
      width = 127;
  $scope.colors = makeColorGradient(redFrequency,grnFrequency,bluFrequency,0,0,0,center,width,150);
})


.controller('ColorCtrl', function($scope, $stateParams) {
  $scope.hex = $stateParams['hex'];
});
