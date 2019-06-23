import { VoitureService } from './../services/voiture.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit {

  @Input() marqueModel: string;
  @Input() commentaire: string;
  @Input() id: number;
  @Input() vitesseMax: number;
  @Input() nombreExem: number;
  @Input() date: number;


  constructor() { }

  ngOnInit() {
  }


}
