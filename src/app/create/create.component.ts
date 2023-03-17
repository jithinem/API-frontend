import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private ds:DataService, private router:Router){
    // var date=new Date();
    // this.d=new Date().toLocaleDateString('en-in', {   day:"numeric", month:"numeric", year:"numeric",})
    // console.log(this.d);
    
    
    // this.d=new Date().toLocaleDateString('en-in', {   day:"numeric", month:"numeric", year:"numeric",})

  }
  fullname:any;
  age:any;
  salary:any;
  post:any;
  // date:any;
  // d:any;

  createNew(){
    var fullname=this.fullname;
    var age=this.age;
    var salary=this.salary;
    var desi=this.post;
    // var date=this.d;
    // console.log(date);
    
    var date=new Date().toLocaleDateString('en-in', {day:"numeric", month:"numeric", year:"numeric",})  
    // console.log(date);
    
    this.ds.createNew(fullname,age,salary,desi,date).subscribe(
      (data:any)=>{
        alert(data.message)
      }
    )
  }

}
