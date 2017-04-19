/**
 * Created by John Martin on 10.04.2017.
 */


var zomatoApiKey = "3d3e95e6b9af0452a4b468cb7596bbc5";
var url = "https://developers.zomato.com/api/v2.1/";
var request = require('request');

var headers = {
  'Accept' : 'application/json',
  'user-key' : zomatoApiKey
};

var ZomatoService = {

  // getResturants : function(lat, lon, range, callback)
  // {
  //   return request({ headers : headers, url : url + "gecode?" + "lat=" + lat + "&lon=" + lon}, function(err, response, body)
  //   {
  //     if (response.statusCode == 200)
  //     {
  //       callback(null, JSON.parse(body));
  //     }
  //     else
  //     {
  //       console.log("error?");
  //       callback(err, null);
  //     }
  //   });
  // },

  searchResturants : function(lat, lon, range, category, cuisinees, callback)
  {
      console.log("lat="+lat+"\nlon="+lon+"\nrange="+range+"\ncategory="+category+"\ncuisinees="+cuisinees);
      var url = "https://developers.zomato.com/api/v2.1/search?";
      var params = ["lat="+lat, "lon="+lon];
      if (range) params.push("radius="+range*1000);
      if (category) params.push("category="+category);
      if (cuisinees) params.push("cuisinees="+cuisinees);
      url += params.join('&');

      return request({headers: headers, url: url}, function (err, response, body)
      {
        if (response.statusCode == 200)
        {
          callback(null, JSON.parse(body));
        }
        else
        {
          console.log("error? search restaurants failed");
          callback(err, null);
        }
      });
  },
  getCities : function (lat, lon, callback) {

    var citiesUrl = url + "cities?" + ["lat=" + lat, "lon=" + lon].join('&');

    return request({url : citiesUrl, headers : headers}, function (err, response, body)
    {
      if (response.statusCode == 200)
      {
        callback(null, JSON.parse(body));
      }
      else
      {
        console.log("error?");
        callback(err, null);
      }
    });
  },
  getCuisinesFromLocation : function (lat, lon, callback) {

    var cuisinesUrl = url + "cuisines?" + ["lat=" + lat, "lon=" + lon].join('&');

    return request({url : cuisinesUrl, headers : headers}, function (err, response, body)
    {
      if (response.statusCode == 200)
      {
        console.log("no error?");
        callback(null, JSON.parse(body));
      }
      else
      {
        console.log("error?");
        callback(err, null);
      }
    });
  },
  getCousinesFromCity : function (city_id, callback) {

    var cuisinesUrl = url + "cuisines?city_id=" + city_id;

    return request({url : cuisinesUrl, headers : headers}, function (err, response, body)
    {
      if (response.statusCode == 200)
      {
        callback(null, JSON.parse(body));
      }
      else
      {
        console.log("error?");
        callback(err, null);
      }
    });
  },
  getCategories : function (callback) {
    return request({url : url + "categories", headers : headers}, function (err, response, body)
    {
      if (response.statusCode == 200)
      {
        callback(null, JSON.parse(body));
      }
      else
      {
        console.log("error?");
        callback(err, null);
      }
    });
  },
  getResturantDetails : function (resutrant_id, callback) {
    return request({url : url + "resturant?res_id=" + resutrant_id, headers : headers}, function (err, response, body)
    {
      if (response.statusCode == 200)
      {
        callback(null, JSON.parse(body));
      }
      else
      {
        console.log("error?");
        callback(err, null);
      }
    });
  }

};

module.exports = ZomatoService;
