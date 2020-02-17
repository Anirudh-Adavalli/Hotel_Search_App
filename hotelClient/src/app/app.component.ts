import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // arr = [];
  // bookingRes = "";

  // confirmation = "";
  // address = [];
  constructor(private http: HttpClient) { }

  // getHotels(city) {
  //   this.http
  //     .get("http://localhost:2200/hotels/" + city.value)
  //     .subscribe(resData => {
  //       this.arr = JSON.parse(JSON.stringify(resData)).results.items;
  //       this.address.push(this.arr[0].vicinity.split("<br/>"));
  //       console.log(this.arr);

  //     });
  // }
  // booking() {
  //   this.http.post("http://localhost:2200/booking").subscribe(res => {
  //     this.bookingRes = JSON.parse(JSON.stringify(res)).id;


  //   });
  // }

  // getConfirmation() {
  //   this.http.get("http://localhost:2200/confirmation/userName").subscribe(res => {

  //     // this.confirmation = JSON.parse(JSON.stringify(res));
  //     // console.log("This is data" + this.confirmation[0]);
  //     this.confirmation = "your booking is done";

  //   });
  // }
}
