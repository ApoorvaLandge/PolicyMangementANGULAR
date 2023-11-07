import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-policy-store',
  templateUrl: './policy-store.component.html',
  styleUrls: ['./policy-store.component.css']
})
export class PolicyStoreComponent {

  constructor(private policyService:PolicyService,private router:Router){}
  title!:string;

  

  ngOnInit(){
    
  }


  


  storePolicy(){

   
   var inputData={
    title:this.title,
    
   }


  this.policyService.storePolicy(inputData).subscribe((response:any)=>{
    
    console.log(response);
    
    this.router.navigate(['/policy']);
  })

  }


}
