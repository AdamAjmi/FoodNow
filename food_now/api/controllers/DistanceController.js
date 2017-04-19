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
  },
  'betweenTwoPoints/:lat1/:lon1/:lat2/:lon2' : function(req, res)
  {
    res.ok({
      distance : DistanceService.distance(Number(req.params['lat1']), Number(req.params['lon1']), Number(req.params['lat2']), Number(req.params['lon2']))
    });
  }


};

