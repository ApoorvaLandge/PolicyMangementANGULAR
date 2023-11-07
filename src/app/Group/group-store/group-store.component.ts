import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-group-store',
  templateUrl: './group-store.component.html',
  styleUrls: ['./group-store.component.css']
})
export class GroupStoreComponent {

  constructor(private groupService:GroupService,private router:Router){}
  title!:string;

 

  storeGroup(){

   
   var inputData={
    title:this.title
   }


  this.groupService.storeGroup(inputData).subscribe((response:any)=>{
    
    console.log(response);
    
    this.router.navigate(['/group']);
  })

  }


}
