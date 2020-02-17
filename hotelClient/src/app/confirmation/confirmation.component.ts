import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  confirmation = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getConfirmation(userName) {
    console.log(userName.value);

    this.http.get("http://localhost:2200/confirmation/" + userName.value).subscribe(res => {

      // this.confirmation = JSON.parse(JSON.stringify(res));
      // console.log("This is data" + this.confirmation[0]);
      this.confirmation = "your booking is done";

    });
  }

}
