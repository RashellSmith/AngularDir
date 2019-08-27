import { Component, OnInit } from '@angular/core';
import{Person} from '../Person';
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
  education = ['GED', 'High School Dipolma',
  'Some College', 'Accociates', 'Bachelors', 'Masters',
   'Doctorate'];
  model = new Person("jesse","awesome",35);
  submitted = false;
  onSubmit(){this.submitted}
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  newPerson() {
    this.model = new Person("", '', 6);
  }

}
