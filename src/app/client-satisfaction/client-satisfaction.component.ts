import { Component, OnInit, Input } from '@angular/core';
import {SatisfactionModel} from '../model/satisfaction.model';

@Component({
  selector: 'app-client-satisfaction',
  templateUrl: './client-satisfaction.component.html',
  styleUrls: ['./client-satisfaction.component.scss']
})
export class ClientSatisfactionComponent implements OnInit {

  @Input() satisfactionsFils : SatisfactionModel [] = [] ;

  constructor() { }

  ngOnInit(): void {

  }

}

