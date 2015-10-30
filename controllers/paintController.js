paintMaster.controller('paintCtrl', function PaintCtrl($scope) {

  $scope.createCanvas = function() {
    $scope.canvas = {};
    $scope.canvas.position = [];

    for(var i = 0; i < 20; i++) {
      row = {};
      row.position = [];

        for(var j = 0; j < 20; j++) {
        paint = {};
        paint.painted = false;
        row.position.push(paint);
      }
      $scope.canvas.position.push(row);
    }
    return $scope.canvas;
  }
  
});
