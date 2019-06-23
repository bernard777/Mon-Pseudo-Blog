import { VoitureService } from './services/voiture.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoitureComponent } from './voiture/voiture.component';
import { VoitureViewComponent } from './voiture-view/voiture-view.component';
import { NewVoitureComponent } from './new-voiture/new-voiture.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    VoitureViewComponent,
    NewVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    VoitureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
