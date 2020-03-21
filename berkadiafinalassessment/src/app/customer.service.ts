import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getpatientDetails():Observable<any>
  {
    const url = "http://localhost:3000/customer/getcustomerdetails";
    return this.http.get(url);
  }

  getIndividualPatientDetailsByFirstName(firstname):Observable<any>
  {
    const url = "http://localhost:3000/customer/getcustomerdetailsbyfirstname";
    return this.http.get(url);
  }

  


postPatientDetails(patientdata):Observable<any>
{
  const url = "http://localhost:3000/customer/insertcustomerdetails"; 
  return this.http.get(url,patientdata);
}

putPatientDetails(patientdata, firstname):Observable<any>
{
  const url = "http://localhost:3000/customer/updatecustomerdetails" + firstname; 
  return this.http.get(url,patientdata);
}

deletePatientDetails(patientdata):Observable<any>
{
  const url = "http://localhost:3000/customer/deletecustomerdetails" + patientdata; 
  return this.http.delete(url);
}
}
