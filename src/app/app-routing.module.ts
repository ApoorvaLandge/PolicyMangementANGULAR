import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PolicyComponent } from './Policy/policy/policy.component';
import { PolicyStoreComponent } from './Policy/policy-store/policy-store.component';
import { PolicyUpdateComponent } from './Policy/policy-update/policy-update.component';
import { CategoryComponent } from './Category/category/category.component';
import { CategoryStoreComponent } from './Category/category-store/category-store.component';
import { CategoryUpdateComponent } from './Category/category-update/category-update.component';
import { GroupComponent } from './Group/group/group.component';
import { GroupStoreComponent } from './Group/group-store/group-store.component';
import { GroupUpdateComponent } from './Group/group-update/group-update.component';
import { AssignCategoryComponent } from './Policy/assign-category/assign-category.component';
import { AssignGroupComponent } from './Policy/assign-group/assign-group.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'policy',
    component:PolicyComponent
  }
  ,
  {
    path:"policy/store",
    component:PolicyStoreComponent
  }
  ,
  {
    path:"policy/edit/:id",
    component:PolicyUpdateComponent
  },
  {
    path:"category",
    component:CategoryComponent
  },
  {
    path:"category/store",
    component:CategoryStoreComponent
  },
  {
    path:"category/edit/:id",
    component:CategoryUpdateComponent
  },
  {
    path:"group",
    component:GroupComponent
  },
  {
    path:"group/store",
    component:GroupStoreComponent
  },
  {
    path:"group/edit/:id",
    component:GroupUpdateComponent
  }
  ,
  {
    path:"policy/assignCategory/:id",
    component:AssignCategoryComponent
  },
  {
    path:"policy/assignGroup/:id",
    component:AssignGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
