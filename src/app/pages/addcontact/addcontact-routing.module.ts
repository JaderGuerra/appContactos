import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcontactComponent } from './addcontact.component';

const routes: Routes = [
  { path: '', component: AddcontactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcontactRoutingModule { }
