import { Component } from '@angular/core';
import { PolicyService } from 'src/app/service/policy.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {

  policies:any;

constructor(private userService:UserService,private policyService:PolicyService){ }

ngOnInit(){
  this.getPolicies();
  
}

getPolicies(){
  this.userService.policy().subscribe((response:any)=>{
    //console.log(response)
    this.policies=response.data;
  });
}

deletePolicy(policyId:any){
  
  this.policyService.deletePolicy(policyId).subscribe((res)=>{
    console.log(res)
    this.getPolicies();
  })


}

}
