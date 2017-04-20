/**
 * RestaurantController
 *
 * @description :: Server-side logic for managing Locations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'categories' : function (req, res) {

    ZomatoService.getCategories(handleCategories);

    function handleCategories(error, result)
    {
      res.ok(result);
    }
  },
  // 'cousines' : function (req, res) {
  //
  //   ZomatoService.getCousines(handleCousin);
  //
  //   function handleCousin(error, result)
  //   {
  //     res.ok(result);
  //   }
  // },
  'info/:id' : function (req, res) {
    ZomatoService.getResturantDetails(req.params['id'], handleRestaurantDetails);

    function handleRestaurantDetails(error, result)
    {
      res.ok(result);
    }
  },
  'cuisines/:city_id' : function (req, res) {
    ZomatoService.getCousinesFromCity(req.params['city_id'], handleCousin);

    function handleCousin(error, result)
    {
      res.ok(result);
    }
  },
  'cuisines/:lat/:lon' : function (req, res) {

    console.log("lat="+req.params.lat+"\nlon="+req.params.lon);
    ZomatoService.getCuisinesFromLocation(req.params.lat, req.params.lon, handleCousin);

    function handleCousin(error, result)
    {
      res.ok(result);
    }
  },
  'restaurants/:lat/:lon/:range/:category/:cousins' : function (req, res) {

    ZomatoService.searchResturants(req.params.lat, req.params.lon, req.params.range, req.params.category, req.params.cousins, handleCites);

    function handleCites(error, result)
    {
      res.ok({
        list : result
      });
    }
  },
  'restaurants/:lat/:lon/:range' : function (req, res) {

    ZomatoService.searchResturants(req.params.lat, req.params.lon, req.params.range, false, false, handleCites);

    function handleCites(error, result)
    {
      res.ok(result);
    }
  }
};
