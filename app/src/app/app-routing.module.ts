import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEntrantsComponent } from './lotto/all-entrants/all-entrants.component';
import { CodexEditComponent } from './codex/edit/codex-edit.component';

const routes: Routes = [
  {path: '',  redirectTo: '/my-codex',  pathMatch: 'full'},
  {path: 'my-codex', component: CodexEditComponent },
  {path: 'raffle',  component: AllEntrantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
