import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent {

  name!:string

  categoryId:any

  constructor(private route:ActivatedRoute,private categoryService:CategoryService,private router:Router){}

  ngOnInit(){
    this.categoryId=this.route.snapshot.paramMap.get('id');
    //console.log(this.policyId)
    this.categoryService.getCategory(this.categoryId).subscribe((response:any)=>{
      this.name=response.name
    });
  }

  updateCategory(){

    var inputData={
      name:this.name
    }

    this.categoryService.updateCategory(inputData,this.categoryId).subscribe((response=>{

      console.log(response);
      this.router.navigate(['/category'])

    }))
  }


}
