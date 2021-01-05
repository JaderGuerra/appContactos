import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcontactRoutingModule } from './addcontact-routing.module';

import { AddcontactComponent } from './addcontact.component';
import { FormularioModule } from 'src/app/shared/components/formulario/formulario.module';




@NgModule({
  declarations: [AddcontactComponent],
  imports: [
    CommonModule,
    AddcontactRoutingModule,FormularioModule
  ]
})
export class AddcontactModule { }
