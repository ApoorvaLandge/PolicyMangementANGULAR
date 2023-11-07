import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-group-update',
  templateUrl: './group-update.component.html',
  styleUrls: ['./group-update.component.css']
})
export class GroupUpdateComponent {

  title!:string

  groupId:any

  constructor(private route:ActivatedRoute,private groupService:GroupService,private router:Router){}

  ngOnInit(){
    this.groupId=this.route.snapshot.paramMap.get('id');
    //console.log(this.policyId)
    this.groupService.getGroup(this.groupId).subscribe((response:any)=>{
      this.title=response.title
    });
  }

  updateGroup(){

    var inputData={
      title:this.title
    }

    this.groupService.updateGroup(inputData,this.groupId).subscribe((response=>{

      console.log(response);
      this.router.navigate(['/group'])

    }))
  }

}
