import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


const routes: Routes = [
  { path: "", component: SearchComponent },
  { path: "booking", component: BookingComponent },
  { path: "confirmation", component: ConfirmationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutes = [SearchComponent, BookingComponent, ConfirmationComponent]