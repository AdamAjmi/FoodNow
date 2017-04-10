/**
 * LocationController
 *
 * @description :: Server-side logic for managing Locations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'test' : function (req, res) {

    ZomatoService.getResturants(51.5, 0, 100, handleCites);

    function handleCites(error, result)
    {
      res.ok({
        value : result
      });
    }
  },
  'show' : function (req, res) {

    var list = ZomatoService.getResturants(51.5, 0, 100, handleCites);
    function handleCites(error, result)
    {
      res.view({list: result, error: error});
    }
  }
};

