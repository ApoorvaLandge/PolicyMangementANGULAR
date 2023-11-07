import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  storeCategory(inputData:any){
    let headers= new HttpHeaders()
  .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);
   
    return this.http.post('http://127.0.0.1:8000/api/categories',inputData,{headers})

  }

  Category(){
    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);
    return this.http.get('http://127.0.0.1:8000/api/categories',{headers})
  }

  getCategory(categoryId:any){

    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);

    return this.http.get(`http://127.0.0.1:8000/api/categories/${categoryId}`,{headers})
  }

  updateCategory(inputData:any,categoryId:any){
    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);

    return this.http.put(`http://127.0.0.1:8000/api/categories/${categoryId}`,inputData,{headers})
  }

  deleteCategory(categoryId:any){

    let headers= new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('access_token')}`);

    return this.http.delete(`http://127.0.0.1:8000/api/categories/${categoryId}`,{headers})

  }
}
