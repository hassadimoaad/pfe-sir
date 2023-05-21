import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { Employer } from 'src/app/controller/model/employer';
import { EmployerService } from 'src/app/controller/service/employer.service';

@Component({
  selector: 'app-creat-emplyer',
  templateUrl: './creat-emplyer.component.html',
  styleUrls: ['./creat-emplyer.component.css']
})
export class CreatEmplyerComponent {
  constructor(private employerService:EmployerService){

  }
  public _employes:Array<Employer>=[];

  public save(){
   
    this._employes.push();
    
    console.log(this.employer);
    //this.employerService.save(this.employer).subscribe(data=>console.log(data));
  }

  get employer(): Employer {
    return this.employerService.employer;
  }

  set employer(value: Employer) {
    this.employerService.employer = value;
  }
}
