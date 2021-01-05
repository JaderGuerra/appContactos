import { Injectable } from '@angular/core';

import { Contacto } from "../models/contacto";

@Injectable({
  providedIn: 'root'
})

export class ContactosService {

  contactos:Contacto[] = []

  constructor() { 
   this.cargarStorage()
  }

  createContacts(id:string, nombre:string,
                 celular:number,direccion:string, 
                 fecha:string){

    const nuevoContacto = new Contacto(id,nombre,celular,direccion,fecha)
    
    this.contactos.push(nuevoContacto)
    this.guardarStorage()
  };

  guardarStorage(){
    localStorage.setItem('contact',JSON.stringify(this.contactos))
  };

  cargarStorage() {
    if (localStorage.getItem('contact')) {
      this.contactos = JSON.parse(localStorage.getItem('contact'))
    }
    else {
      this.contactos = []
    }
  };

  eliminar(item){
    this.contactos = this.contactos.filter((contact) => contact !== item)
    localStorage.setItem('contact', JSON.stringify(this.contactos) )
  };  

  

};
