import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public liaison3: string = 'Liaison 3';
  public image: string = 'https://s3.eu-central-1.amazonaws.com/angularemailsimages/angular.png';

  constructor() { }

  ngOnInit(): void {
  }

  public click(): void {
    console.log('Liaison 2');
  }
}
