import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [
  { path: 'employees-list', component: EmpListComponent },
  { path: 'employees-details', component: EmpDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
