import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Avis} from './../model';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  @Output() avisE = new EventEmitter<Avis>();

  aimer(){
    this.avisE.emit(Avis.AIMER)
  }

  detester(){
    this.avisE.emit(Avis.DETESTER)
    }

  constructor() { }

  ngOnInit(): void {
  }

}
