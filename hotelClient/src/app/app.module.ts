import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, appRoutes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
// import { BookingComponent } from './booking/booking.component';
//import { SearchComponent } from './search/search.component';
// import { ConfirmationComponent } from './confirmation/confirmation.component';
@NgModule({
  declarations: [AppComponent, appRoutes],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
