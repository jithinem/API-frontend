import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date:any;
  constructor(private ds:DataService){
   this.date=new Date().toLocaleDateString('en-in', {   day:"numeric", month:"numeric", year:"numeric",})
    this.ds.getAllApi().subscribe(
      (data:any)=>{
        this.allApi=data.Api
      }
    )
    console.log(this.allApi);

  }
  allApi:any=[];
  ngOnInit():void{
  }



  loadId(id:any){
    localStorage.setItem("id",JSON.stringify(id))
  }

}
