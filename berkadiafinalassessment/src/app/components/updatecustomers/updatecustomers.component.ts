import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {CustomerService} from '../../customer.service';


@Component({
  selector: 'app-addcustomers',
  templateUrl: './updatecustomers.component.html',
  styleUrls: ['./updatecustomers.component.css']
})
export class AddcustomersComponent implements OnInit {

  constructor(private router: Router, private service:CustomerService) { }

  ngOnInit(): void {
  }
  msgupdated:String;
  firstname: String
  goBack()
  {
    this.router.navigate(['/getpatientdetails']);
  }

  getDetailsFromForm(obj)
  {
    this.service.putPatientDetails(obj,this.firstname)
    .subscribe((value)=>
    {
      this.msgupdated = "Data updated";
    })
  }
}
