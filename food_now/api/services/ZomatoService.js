/**
 * Created by John Martin on 10.04.2017.
 */


var zomatoApiKey = "3d3e95e6b9af0452a4b468cb7596bbc5";
var url = "https://developers.zomato.com/api/v2.1/geocode?";
var request = require('request');

var headers = {
  'Accept' : 'application/json',
  'user-key' : zomatoApiKey
}

var ZomatoService = {

  getResturants : function(lat, lon, range, callback)
  {
    return request({ headers : headers, url : url + "lat=" + lat + "&lon=" + lon}, function(err, response, body)
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
