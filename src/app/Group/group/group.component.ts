import { Component } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {

  groups:any;

constructor(private groupService:GroupService){ }

ngOnInit(){
  this.getGroups();
  
}

getGroups(){
  this.groupService.Group().subscribe((response:any)=>{
    //console.log(response)
    this.groups=response.data;
  });
}

deleteGroup(policyId:any){
  
  this.groupService.deleteGroup(policyId).subscribe((res)=>{
    console.log(res)
    this.getGroups();
  })


}

}
