import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { updatecustomersComponent } from './components/updatecustomers/updatecustomers.component';


const routes: Routes = [
  {path : "" , redirectTo : "/getcustomerdetails" , pathMatch : full },
  {path: "getcustomerdetails", component: CustomerlistComponent},
  {path: "insertcustomerdetails", component: updatecustomersComponent},
  {path : "**" , component : errorComponent },                                        //Order important as ** can mean any of the above in regular expression but is generally
  
 ];                                                                                         //meant for other than above

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [CustomerlistComponent,updatecustomersComponent];
