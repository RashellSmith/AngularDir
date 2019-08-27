import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person.service';
import {Person} from '../Person';
@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {
  person1: Person;
  person2: Person;
  person3: Person;
  person4: Person;


  constructor(private personservice: PersonService) {

   }

  ngOnInit() {

    this.getPerson1();
    this.person2 = this.personservice.getPerson2();
    this.person3 = this.personservice.getPerson3();
    this.person4 = this.personservice.getPerson4();

  }

getPerson1(){
  this.personservice.getPerson1().subscribe(p => this.person1= p)
}
  

}
