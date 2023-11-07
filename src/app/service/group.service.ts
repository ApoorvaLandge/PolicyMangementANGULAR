import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }

  storeGroup(inputData:any){
    let headers= new HttpHeaders()
  .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);
   
    return this.http.post('http://127.0.0.1:8000/api/groups',inputData,{headers})
  }

  Group(){
    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);
    return this.http.get('http://127.0.0.1:8000/api/groups',{headers})
  }

  getGroup(groupId:any){

    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);

    return this.http.get(`http://127.0.0.1:8000/api/groups/${groupId}`,{headers})
  }

  updateGroup(inputData:any,groupId:any){
    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);

    return this.http.put(`http://127.0.0.1:8000/api/groups/${groupId}`,inputData,{headers})
  }

  deleteGroup(groupId:any){

    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);

    return this.http.delete(`http://127.0.0.1:8000/api/groups/${groupId}`,{headers})

  }
}
