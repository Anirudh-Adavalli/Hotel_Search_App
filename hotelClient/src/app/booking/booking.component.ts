import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingRes = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  booking(userName, hotelName, checkInDate, checkOutDate) {
    console.log(userName.value, hotelName.value, typeof checkInDate.value, checkOutDate.value);

    this.http.post("http://localhost:2200/booking", { userName, hotelName, checkInDate, checkOutDate })
      .subscribe(res => {
        this.bookingRes = JSON.parse(JSON.stringify(res)).id;
        console.log(res);


      });
  }

}
