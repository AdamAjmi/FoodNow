/**
 * DistanceController
 *
 * @description :: Server-side logic for managing Distances
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'test' : function (req, res) {
     res.ok({
       value : DistanceService.distance(51.5, 0, 38.8, -77.1)
     });
  }


};

