/**
 * RestaurantController
 *
 * @description :: Server-side logic for managing Locations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  'cuisines/:lat/:lon' : function (req, res) {
    // console.log("lat="+req.params.lat+"\nlon="+req.params.lon);
    ZomatoService.getCuisinesFromLocation(req.params.lat, req.params.lon, handleCuisines);
    function handleCuisines(error, result)
    {
      res.ok(result);
    }
  },


  'restaurants/:lat/:lon/:range/:category/:cuisines' : function (req, res) {
    ZomatoService.searchRestaurants(req.params.lat, req.params.lon, req.params.range, req.params.category, req.params.cuisines, handleCites);
    function handleCites(error, result)
    {
      res.ok(result);
    }
  },


  'restaurants/:lat/:lon/:range' : function (req, res) {
    ZomatoService.searchRestaurants(req.params.lat, req.params.lon, req.params.range, false, false, handleCites);
    function handleCites(error, result)
    {
      res.ok(result);
    }
  },


  'categories' : function (req, res) {
    ZomatoService.getCategories(handleCategories);
    function handleCategories(error, result)
    {
      res.ok(result);
    }
  },


  'info/:id' : function (req, res) {
    ZomatoService.getResturantDetails(req.params['id'], handleRestaurantDetails);
    function handleRestaurantDetails(error, result)
    {
      res.ok(result);
    }
  },


  'cuisines/:city_id' : function (req, res) {
    ZomatoService.getCousinesFromCity(req.params['city_id'], handleCityCuisines);
    function handleCityCuisines(error, result)
    {
      res.ok(result);
    }
  }
};
