import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }

  login(data:any){
    this.http.post('http://127.0.0.1:8000/api/login',data).subscribe((response:any)=>{
       
    localStorage.setItem("access_token",response.access_token)

       this.router.navigate(['/policy'])
       //console.log(response.access_token)
    })
  }

  policy(){
    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);
    return this.http.get('http://127.0.0.1:8000/api/policies',{headers})
  }
}
