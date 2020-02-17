const express = require("express");
const app = express();
const request = require("request");
const NodeGeocoder = require("node-geocoder");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hotel");
app.use(bodyParser.urlencoded({ extended: true }));

var bookingSchema = new mongoose.Schema({
  userName: String,
  hotelName: String,
  checkInDate: String,
  checkOutDate: String
});

var booking = mongoose.model("booking", bookingSchema);

// Get the hotels in a city
// app.get("/hotels/:cityName", (req, resp) => {
//   var cityName = req.params.cityName;
//   var options = {
//     provider: "here",
//     httpAdapter: "https",
//     appId: "LUmYZHox3rsHp648WHiN",
//     appCode: "39lXoYaQrllIqDifiR2QDg",
//     formatter: null
//   };
//   console.log(cityName);

//   var geocoder = NodeGeocoder(options);
//   geocoder.geocode(cityName, function(err, res) {
//     var lat = res[0].latitude;
//     var long = res[0].longitude;
//     console.log(lat);
//     console.log(long);

//     request(
//       "https://places.sit.ls.hereapi.com/places/v1/discover/search?at=" +
//         lat +
//         "%2C" +
//         long +
//         "&q=Hotel&Geolocation=geo%3A50.8298%2C12.9259&Accept-Language=en-US%2Cen%3Bq%3D0.9%2Cde%3Bq%3D0.8&app_id=LUmYZHox3rsHp648WHiN&app_code=39lXoYaQrllIqDifiR2QDg",
//       (error, response, body) => {
//         if (error) {
//           console.log("There is an error");
//         } else {
//           //let data = JSON.parse(body);
//           resp.send(body);
//         }
//       }
//     );
//   });
// });

// Posting data for booing hotels
app.post("/booking", (req, res) => {
  var data = req.body;
  booking.create(
    {
      userName: data.userName,
      hotelName: data.hotelName,
      checkInDate: data.checkInDate,
      checkOutDate: data.checkOutDate
    },
    (error, data) => {
      if (error) {
        console.log("There is an error in add data to the database ");
      } else {
        console.log("Booking Done");
      }
    }
  );

  res.send({ id: "Booking Successfull" });
});

app.get("/confirmation/:userName", (req, res) => {
  var userdata = req.param.userName;
  console.log(userdata);

  booking.findOne({ userName: userdata }, (error, bookingData) => {
    // res.send({
    //   hotelName: bookingData.hotelName,
    //   checkInDate: bookingData.checkInDate,
    //   checkOutDate: bookingData.checkOutDate
    // });
    res.send(bookingData);
    if (error) {
      console.log(error);
    }
  });
});

app.listen(2200, () => {
  console.log("Server started at 2200");
});
