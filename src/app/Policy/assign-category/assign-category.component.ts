import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-assign-category',
  templateUrl: './assign-category.component.html',
  styleUrls: ['./assign-category.component.css']
})
export class AssignCategoryComponent {

  title!:string

  policyId:any

  category_id:any

  selectedCategories: number[] = [];

  categories:any[]=[]

  constructor(private route:ActivatedRoute,private policyService:PolicyService,private router:Router,private categoryService:CategoryService){}

  ngOnInit(){
    this.policyId=this.route.snapshot.paramMap.get('id');
    //console.log(this.policyId)
    this.policyService.getPolicy(this.policyId).subscribe((response:any)=>{
      this.title=response.title
    });

    this.getCategories();
  }

  getCategories(){
    this.categoryService.Category().subscribe((res:any)=>{
      this.categories=res.data;
    })
  }

  assignCategory(){
    var inputData={
      //title:this.title,
      category_id : this.selectedCategories
    }
    this.policyService.assignCategories(inputData,this.policyId).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/policy'])
      
    })
  }


}
