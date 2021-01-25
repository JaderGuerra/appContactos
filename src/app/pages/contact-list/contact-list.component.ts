import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactosService } from 'src/app/shared/services/contactos.service';
import Swal from 'sweetalert2';
import { Contacto } from '../../shared/models/contacto';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  constructor(public contactSVC: ContactosService, private router: Router) {}

  ngOnInit(): void {
    this.contactSVC.cargarStorage();
  }

  borrar(contact: Contacto) {
    Swal.fire({
      title: 'Eliminar Contacto?',
      text: 'Estas Seguro Que Deseas Eliminar Este Contacto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactSVC.eliminar(contact);
        Swal.fire('Contacto Eliminado', 'success');
      }
    });
  }

  pageEditar(some: string) {
    this.router.navigate(['/editar', some]);
  }
}
