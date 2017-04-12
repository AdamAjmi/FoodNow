/**
 * Created by John Martin on 10.04.2017.
 */

var DistanceService = require('DistanceService');

describe("Service", function () {

  var d = DistanceService.distance(51.5, 0, 38.8, -77.1);

  console.log(d);

});
