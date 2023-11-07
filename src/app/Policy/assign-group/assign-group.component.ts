import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/service/group.service';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-assign-group',
  templateUrl: './assign-group.component.html',
  styleUrls: ['./assign-group.component.css']
})
export class AssignGroupComponent {

  title!:string

  policyId:any

  group_id:any

  selectedGroups: number[] = [];

  groups:any[]=[]


  constructor(private route:ActivatedRoute,private policyService:PolicyService,private router:Router,private groupService:GroupService){}

  ngOnInit(){
    this.policyId=this.route.snapshot.paramMap.get('id');
    //console.log(this.policyId)
    this.policyService.getPolicy(this.policyId).subscribe((response:any)=>{
      this.title=response.title
    });

    this.getGroups();
  }

  getGroups(){
    this.groupService.Group().subscribe((res:any)=>{
      this.groups=res.data;
    })
  }

  assignGroup(){
    var inputData={
      //title:this.title,
      group_id : this.selectedGroups
    }
    this.policyService.assignGroups(inputData,this.policyId).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/policy'])
      
    })
  }

}
