import { Injectable } from '@angular/core';
import { Person } from './Person';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
    }
   person1: Person;
   person2: Person;
   person3: Person;
   person4: Person;
  

  constructor() { 
    this.person1 = new Person("James","Does", 36);
    this.person2 = new Person("Wendy","John", 56);
    this.person3 = new Person("Matt","Lovett", 19);
    this.person4 = new Person("Dawn","Sun", 42);
  }
 
  getPerson1():Observable<Person>{
    let test = of(this.person1);
    this.delay(4000).then(any=> {return this.person1.firstName = "mary"});
    //let let  of (this.person)
    return test;
  }
  
  getPerson2():Person{
    return this.person2;
  }
  getPerson3():Person{
    return this.person3;
  }
  getPerson4():Person{
    return this.person4;
  }
  
  
  
}