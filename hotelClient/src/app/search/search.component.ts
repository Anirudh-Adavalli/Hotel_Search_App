import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  address = [];
  arr = [];

  @Output() titleEmitt = new EventEmitter()

  constructor(private http: HttpClient) { }
  getHotels(city) {
    this.http
      .get("http://localhost:2200/hotels/" + city.value)
      .subscribe(resData => {
        this.arr = JSON.parse(JSON.stringify(resData)).results.items;
        this.address.push(this.arr[0].vicinity.split("<br/>"));
        console.log(this.arr);

      });
  }

  gethotelTitle(hotelTitle) {

    console.log(hotelTitle);
    this.titleEmitt.emit(hotelTitle.innerText);

  }

  ngOnInit() {
  }

}
