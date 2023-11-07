import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-policy-update',
  templateUrl: './policy-update.component.html',
  styleUrls: ['./policy-update.component.css']
})
export class PolicyUpdateComponent {

  title!:string

  policyId:any

  constructor(private route:ActivatedRoute,private policyService:PolicyService,private router:Router){}

  ngOnInit(){
    this.policyId=this.route.snapshot.paramMap.get('id');
    //console.log(this.policyId)
    this.policyService.getPolicy(this.policyId).subscribe((response:any)=>{
      this.title=response.title
    });
  }

  updatePolicy(){

    var inputData={
      title:this.title
    }

    this.policyService.updatepolicy(inputData,this.policyId).subscribe((response=>{

      console.log(response);
      this.router.navigate(['/policy'])

    }))
  }

}
