import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpCallService } from './http-call-service.service';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MypipePipe } from './mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewEmpComponent
    // MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
