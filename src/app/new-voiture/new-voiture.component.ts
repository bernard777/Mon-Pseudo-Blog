import { VoitureService } from './../services/voiture.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-voiture',
  templateUrl: './new-voiture.component.html',
  styleUrls: ['./new-voiture.component.scss']
})
export class NewVoitureComponent implements OnInit {

  constructor(private voitureService: VoitureService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const model = form.value['marqueModel'];
    const date = form.value['date'];
    const vitesseM = form.value['vitesseMax'];
    const exemplaire = form.value['nombredexemplaire'];
    const commentaire = form.value['commentaire'];
    this.voitureService.addVoiture(model, date, vitesseM, exemplaire, commentaire);
    this.router.navigate(['/voitures']);
  }

}
