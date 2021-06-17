import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HttpCallService } from '../http-call-service.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MypipePipe } from '../mypipe.pipe';

console.log("lazy loading")
@NgModule({
  declarations: [
    EmpListComponent,
    EmpDetailsComponent,
    MypipePipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxDatatableModule
  ],
  providers: [HttpCallService]
})
export class AdminModule { }
