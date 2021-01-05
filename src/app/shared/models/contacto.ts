export class Contacto {
  id: string;
  nombre:string;
  celular:number;
  direccion:string;
  fecha:Date; 
  // fecha:string;

  constructor(id:string,nombre:string,
              celular:number,direccion:string,
              fecha:Date){

    this.id = id;
    this.nombre = nombre;
    this.celular = celular;
    this.direccion = direccion;
    this.fecha = fecha;
  } 
}
