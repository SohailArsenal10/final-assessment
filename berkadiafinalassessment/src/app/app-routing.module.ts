import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { updatecustomersComponent } from './components/updatecustomers/updatecustomers.component';


const routes: Routes = [
  {path: "getcustomerdetails", component: CustomerlistComponent},
  {path: "insertcustomerdetails", component: updatecustomersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [CustomerlistComponent,updatecustomersComponent];