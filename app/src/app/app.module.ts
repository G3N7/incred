import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EntrantComponent } from './lotto/entrant/entrant.component';
import { AllEntrantsComponent } from './lotto/all-entrants/all-entrants.component';
import { GetAllEntrantsService } from './lotto/get-all-entrants.service';
import { RosterService } from './roster.service';
import { AvatarLookupService } from './avatar-lookup.service';
import { NotWinnersPipe } from './lotto/not-winners.pipe';
import { WinnersPipe } from './lotto/winners.pipe';
import { DetailComponent } from './codex/edit/detail/detail.component';
import { CodexEditComponent } from './codex/edit/codex-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrantComponent,
    AllEntrantsComponent,
    NotWinnersPipe,
    WinnersPipe,
    CodexEditComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [RosterService, AvatarLookupService],
  bootstrap: [AppComponent]
})
export class AppModule {}
