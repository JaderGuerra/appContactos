import { Component,  OnInit,} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ContactosService } from 'src/app/shared/services/contactos.service';
import { Contacto } from "../../shared/models/contacto";
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

 
  constructor(public contactSVC:ContactosService) {}

  ngOnInit(): void {
    this.contactSVC.cargarStorage()
  }

  
  borrar(contact:Contacto){
    this.contactSVC.eliminar(contact)
  }

 

  
}
