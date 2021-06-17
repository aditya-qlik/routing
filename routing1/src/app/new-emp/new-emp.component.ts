import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpCallService } from '../http-call-service.service';

@Component({
  selector: 'app-new-emp',
  templateUrl: './new-emp.component.html',
  styleUrls: ['./new-emp.component.css']
})
export class NewEmpComponent implements OnInit {


  signUpForm: FormGroup | any;
  submitted = false;

  constructor(private fb: FormBuilder, private employeeService: HttpCallService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
      address: this.fb.group(
        this.initAddress()
      ),
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]\d*$/)])]
    })
  }

  initAddress() {
    return {
      street: ['', Validators.required],
      city: ['', Validators.required],
      geo: this.fb.group(
        this.geoLocation()
      )
    };
  }

  geoLocation() {
    return {
      lat: ['',Validators.compose([Validators.required, Validators.pattern(/([+-]?(\d+)+(\.\d+))|\d+$/)])],
      lng: ['',Validators.compose([Validators.required, Validators.pattern(/([+-]?(\d+)+(\.\d+))|\d+$/)])]
    };
  }

  onSubmit() {
    this.submitted = true;

    // console.log(this.signUpForm)

    if (this.signUpForm.invalid) {
      return;
    }

    this.employeeService.postEmployee(this.signUpForm.value)

  }

  onReset() {
    this.submitted = false;
    this.signUpForm.reset();
  }

}
