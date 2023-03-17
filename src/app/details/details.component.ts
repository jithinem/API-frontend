import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any;
  Api:any;
  fullname:any;
  age:any;
  salary:any;
  post:any;

  constructor(private ds:DataService, private router:Router){
    this.id=JSON.parse(localStorage.getItem("id")||'')
    console.log(this.id);
    this.ds.displayApi(this.id).subscribe(
      (data:any)=>{
        this.Api=data.Api
        console.log(this.Api);
        console.log(this.Api.name);
        this.fullname=this.Api.name
        this.age=this.Api.age
        this.salary=this.Api.salary
        this.post=this.Api.post    
      }
    )      

  }


}
