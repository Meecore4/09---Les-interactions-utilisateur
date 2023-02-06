import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from '../kitten.model';


@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {


  @Input() adoptCat: Kitten[] = [];

  adoptdKittens : Kitten[] = [];

  constructor(){}

ngOnInit(){

  this.adoptdKittens = this.adoptCat;
  console.log(this.adoptdKittens);
  console.log(this.adoptCat);
}

}



