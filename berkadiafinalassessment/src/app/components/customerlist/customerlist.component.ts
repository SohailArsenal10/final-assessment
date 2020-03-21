import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../customer.service';
import {customerinterface} from '../../customerinterface';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private service:CustomerService) { }
  
  patientdata: customerinterface[];
  firstnamestandalone:String;
  msgdelete
  ngOnInit(): void {

    this.service.getpatientDetails()
    .subscribe((value)=>{
      this.patientdata = value;
    })
  }

  sendFirstNameToDelete(firstname)                              //Local firstname parameter received from form
  {
    this.service.deletePatientDetails(firstname)
    .subscribe((value)=>{
     this.msgdelete = "Value deleted";
    })
  }

  filteraction()
  {
    this.service.getIndividualPatientDetailsByFirstName(this.firstnamestandalone)             //Patient data updated after filtering
    .subscribe((value)=>{                                                           //firstname received from ngmodel standalone filter bar
      this.patientdata = value;


    })
  }

}
