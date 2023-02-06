import { Component, Input } from '@angular/core';
import { Kitten } from './kitten.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '09-LesInteractionsUtilisateur';


  toAdoptKitten : Kitten[] = [

    new Kitten('Bianca', 'Angora', '14/04/2021','./assets/cat1.png' ),
    new Kitten('Gino', 'Angora', '15/05/2022','./assets/cat2.png' ),
    new Kitten('Félix', 'Gouttière', '16/06/2022','./assets/cat3.jpg' ),
    new Kitten('Bello', 'Inconnu', '13/11/2020','./assets/cat4.jpg' ),

    ]

  adoptedKittens : Kitten[] = [];

  constructor(){ }

  sendToList(event:Kitten){

  this.toAdoptKitten.push(event);
  }

  adoptKitten(event:number) : void{

    this.adoptedKittens.push(this.toAdoptKitten[event]);
    this.toAdoptKitten.splice(event,1);

  }

}