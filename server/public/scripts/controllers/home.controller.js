app.controller('HomeController', ['$http', function($http) {
  console.log('HomeController running');
  var self = this;

      self.dataArray = [
      {
        src: '../assets/images/carousel/genome.jpg'
      },
      {
        src: '../assets/images/carousel/falkirk-wheel.jpg'
      },
      {
        src: '../assets/images/carousel/iss.jpg'
      },
      {
        src: '../assets/images/carousel/shark.jpg'
      },
      {
        src: '../assets/images/carousel/snowflake.jpg'
      },
      {
        src: '../assets/images/carousel/virus.jpg'
      },
      {
        src: '../assets/images/carousel/rock-formation.jpg'
      },
      {
        src: '../assets/images/carousel/circuit-board.jpg'
      }
    ];
}]);
