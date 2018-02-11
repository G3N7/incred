import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEntrantsComponent } from './lotto/all-entrants/all-entrants.component';

const routes: Routes = [
  {path: '',  redirectTo: '/raffle',  pathMatch: 'full'},
  {path: 'raffle',  component: AllEntrantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
