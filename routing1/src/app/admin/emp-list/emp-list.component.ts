import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../http-call-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees : any = [];

  constructor(private employeeService : HttpCallService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe(
        data => this.employees = data,
        error => console.error("Error while fetching"),
        ()=> console.table(this.employees)
      );
  }

}
