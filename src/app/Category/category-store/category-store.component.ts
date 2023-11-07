import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-store',
  templateUrl: './category-store.component.html',
  styleUrls: ['./category-store.component.css']
})
export class CategoryStoreComponent {

  constructor(private categoryService:CategoryService,private router:Router){}
  name!:string;

 

  storeCategory(){

   
   var inputData={
    name:this.name
   }


  this.categoryService.storeCategory(inputData).subscribe((response:any)=>{
    
    console.log(response);
    
    this.router.navigate(['/category']);
  })

  }

}
