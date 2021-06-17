import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  private _url : string = "https://jsonplaceholder.typicode.com/users";

  private headers= new HttpHeaders()
  .set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url,{'headers': this.headers })
  }

  postEmployee(employeeData:any){
    this.http.post(this._url, employeeData).toPromise().then((data:any)=> console.log(data)).catch(()=>console.log("Error while posting"))
  }
}
