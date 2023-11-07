import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PolicyComponent } from './Policy/policy/policy.component';
import { PolicyStoreComponent } from './Policy/policy-store/policy-store.component';
import { PolicyUpdateComponent } from './Policy/policy-update/policy-update.component';
import { AssignCategoryComponent } from './Policy/assign-category/assign-category.component';
import { AssignGroupComponent } from './Policy/assign-group/assign-group.component';
import { CategoryComponent } from './Category/category/category.component';
import { CategoryStoreComponent } from './Category/category-store/category-store.component';
import { CategoryUpdateComponent } from './Category/category-update/category-update.component';
import { GroupUpdateComponent } from './Group/group-update/group-update.component';
import { GroupStoreComponent } from './Group/group-store/group-store.component';
import { GroupComponent } from './Group/group/group.component';
import { NavComponent } from './Partials/nav/nav.component';
import { NavbComponent } from './Partials/navb/navb.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyComponent,
    PolicyStoreComponent,
    PolicyUpdateComponent,
    AssignCategoryComponent,
    AssignGroupComponent,
    CategoryComponent,
    CategoryStoreComponent,
    CategoryUpdateComponent,
    GroupUpdateComponent,
    GroupStoreComponent,
    GroupComponent,
    NavComponent,
    NavbComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
