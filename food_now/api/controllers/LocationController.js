/**
 * LocationController
 *
 * @description :: Server-side logic for managing Locations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'test' : function (req, res) {

    ZomatoService.searchResturants(40.732013, -73.996155, 20, false, false, handleCites);

    function handleCites(error, result)
    {
      res.ok({
        list : result
      });
    }
  },
  'show' : function (req, res) {

    ZomatoService.searchResturants(40.732013, -73.996155, 100, false, false, handleCites);
    function handleCites(error, result)
    {
      console.log(result);
      res.view({list: result, error: error});
    }



  },

  'cities/:lat/:lon' : function (req, res) {
    ZomatoService.getCities(req.params['lat'], req.params['lon'], handleCites);
    function handleCites(error, result)
    {
      res.ok(result);
    }
  }
};

