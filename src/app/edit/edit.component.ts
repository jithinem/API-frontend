import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
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

  updateApi(){
    var date=new Date().toLocaleDateString('en-in', {   day:"numeric", month:"numeric", year:"numeric",})

    this.ds.updateApi(this.id,this.fullname,this.age,this.salary,this.post,date).subscribe(
      (data:any)=>{
        alert(data.message)
      }
    )
        localStorage.removeItem("id")

  }

  deleteApi(){
    this.ds.deleteApi(this.id).subscribe(
      (data:any)=>{
        alert(data.message)
        this.fullname=null;
        this.age=null;
        this.salary=null;
        this.post=null;
      }
    )
  }

}
