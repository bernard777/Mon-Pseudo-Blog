import { VoitureService } from './../services/voiture.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture-view',
  templateUrl: './voiture-view.component.html',
  styleUrls: ['./voiture-view.component.scss']
})
export class VoitureViewComponent implements OnInit {

  constructor(private voitureService: VoitureService, private router: Router) { }

  voitures: any[];

  ngOnInit() {
    this.voitures = this.voitureService.voitures;
  }

  onAddVoiture() {
    this.router.navigate(['/addVoiture']);
  }

}
