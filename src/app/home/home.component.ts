import {Component, OnInit} from '@angular/core';
import {SatisfactionModel} from '../model/satisfaction.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  satisfactionsParent: SatisfactionModel [] = [
    {
      message:'Encore un grand merci pour ma commande, cétait super bon.',
      nom: 'Anne'
    },
    {
      message: ' le prix est correct',
      nom: 'Lola'
    },
    {
      message: ' le prix est correct',
      nom: 'Lola'
    },
    {
      message: ' le prix est correct',
      nom: 'Lola'
    },
    {
      message: 'Très bonne qualité',
      nom: 'Hugo'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
