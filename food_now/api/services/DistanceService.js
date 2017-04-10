/**
 * Created by John Martin on 10.04.2017.
 */


/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}


var DistanceService = {

  /**
   * Calculates the distances between two locations in km.
   * Usage : DistanceService.distance( variables ) ;
   */
  distance : function(longitude1, latitude1, longitude2, latitude2)
  {
    var R = 6371; //Radius of the earth in KM.
    var distanceLongitude = (longitude2 - longitude1).toRad();

    var distanceLatitude = (latitude2 - latitude1).toRad();

    var a = Math.sin(distanceLatitude / 2) * Math.sin(distanceLatitude / 2) +
            Math.cos(latitude1.toRad()) * Math.cos(latitude1.toRad()) *
            Math.sin(distanceLongitude / 2) * Math.sin(distanceLongitude / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return d;
  }

};

module.exports = DistanceService;
