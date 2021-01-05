import { Injectable } from '@angular/core';

import { Contacto } from "../models/contacto";

@Injectable({
  providedIn: 'root'
})

export class ContactosService {

  contacto:Contacto[] = []

  constructor() { 
   this.cargarStorage()
  }

  createContacts(id:string, nombre:string,
                 celular:number,direccion:string, 
                 fecha:Date){

    const nuevoContacto = new Contacto(id,nombre,celular,direccion,fecha)
    
    this.contacto.push(nuevoContacto)
    this.guardarStorage()
  };

  guardarStorage(){
    localStorage.setItem('contact',JSON.stringify(this.contacto))
  };

  cargarStorage() {
    if (localStorage.getItem('contact')) {
      this.contacto = JSON.parse(localStorage.getItem('contact'))
    }
    else {
      this.contacto = []
    }
  };

  eliminar(item){
    this.contacto = this.contacto.filter((contact) => contact !== item)
    localStorage.setItem('contact', JSON.stringify(this.contacto) )
  };  

  

}
