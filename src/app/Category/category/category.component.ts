import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories:any;


  constructor(private categoryService:CategoryService){}

  ngOnInit(){
    this.getCategories();
    
  }
  
  getCategories(){
    this.categoryService.Category().subscribe((response:any)=>{
      //console.log(response)
      this.categories=response.data;
    });
  }
  
  deleteCategory(categoryId:any){
    
    this.categoryService.deleteCategory(categoryId).subscribe((res)=>{
      console.log(res)
      this.getCategories();
    })

}

}
