import { NewVoitureComponent } from './new-voiture/new-voiture.component';
import { VoitureViewComponent } from './voiture-view/voiture-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'voitures', component: VoitureViewComponent},
  { path: 'addVoiture', component: NewVoitureComponent},
  { path: '', component: VoitureViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
