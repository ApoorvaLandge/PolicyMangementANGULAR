import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  

  constructor(private http:HttpClient) { }
  

 

  storePolicy(inputData:any){
    let headers= new HttpHeaders()
  .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);
   
    return this.http.post('http://127.0.0.1:8000/api/policies',inputData,{headers})
  }

  getPolicy(policyId:any){

    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);

    return this.http.get(`http://127.0.0.1:8000/api/policies/${policyId}`,{headers})
  }

  updatepolicy(inputData:any,policyId:any){
    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);

    return this.http.put(`http://127.0.0.1:8000/api/policies/${policyId}`,inputData,{headers})
  }

  deletePolicy(policyId:any){

    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);

    return this.http.delete(`http://127.0.0.1:8000/api/policies/${policyId}`,{headers})

  }

  assignCategories(inputData:any,policyId:any){
    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);

    return this.http.post(`http://127.0.0.1:8000/api/setcategories/${policyId}`,inputData,{headers})
  }

  assignGroups(inputData:any,policyId:any){

    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);


    return this.http.post(`http://127.0.0.1:8000/api/setGroups/${policyId}`,inputData,{headers})
  }
}
