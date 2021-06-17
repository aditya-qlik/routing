import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEmpComponent } from './new-emp/new-emp.component';

const routes: Routes = [
  { path: 'new-employee', component: NewEmpComponent },
  {
    path: 'employee-info',
    loadChildren: () => import ('./admin/admin.module').then( m => m.AdminModule)
  },
  { path: '**', redirectTo: '/new-employee' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
