import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  
  getAllApi(){
    return this.http.get('http://localhost:3000/allApi')
  }

  displayApi(id:any){
    const body={
      id
    }
    return this.http.post('http://localhost:3000/editDisplay',body)
  }

  updateApi(id:any,name:any,age:any,salary:any,post:any,date:any){
    const body={
      id,name,age,salary,post,date
    }
    return this.http.patch('http://localhost:3000/updateApi',body)
  }

  deleteApi(id:any){
    return this.http.delete('http://localhost:3000/deleteApi/'+id)
  }

  createNew(name:any,age:any,salary:any,post:any,date:any){
    const body={
      name,age,salary,post,date
    }
    return this.http.post('http://localhost:3000/createNew',body)
  }

  





}
