
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Contacto } from '../../models/contacto';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  formulario:FormGroup;
  id:string | null;

  constructor(private fb:FormBuilder,
              private router:Router,
              public contactoSVC:ContactosService,
              private aRouter:ActivatedRoute) { 
    this.crearFormulario()
  }

  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl('/contactList')
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      id:['',[Validators.required,Validators.minLength(5),Validators.pattern('[0-9]*')]],
      nombre:['',[Validators.required,Validators.minLength(10)]],
      direccion:['',[Validators.required,Validators.minLength(6)]],
      celular:['',[Validators.required,Validators.minLength(9)]],
      fecha:['',[Validators.required,Validators.minLength(3)]],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
   this.getDataInForm()
  }

guardar(){

    if (this.formulario.invalid) {
      return
    }
    else if (this.formulario.valid) {

        const {id,nombre,celular,direccion,fecha} = this.formulario.value;
        if (this.id === null) {
          this.contactoSVC.createContacts(id,nombre, celular,direccion,fecha)
          
           this.formulario.reset()
        }
        this.contactoSVC.guardarStorage()
         this.back()
      
    }
    
  };

  mensajeError(field:string):string{

    let mensaje:string;

    if (this.formulario.get(field).errors?.required) {
      mensaje = "Este campo es obligatorio"
    }
    else if(this.formulario.get(field).hasError('pattern')){
      mensaje = "Debes ingresar solo numeros"    
    }
    else if(this.formulario.get(field).hasError('minlength')){

      const minlength = this.formulario.get(field).errors?.minlength.requiredLength
      mensaje = `minimo ${minlength} caracteres `
    }
    
    return mensaje;
  };

  isInvalid(field:string):boolean{
    return (this.formulario.get(field).touched || this.formulario.get(field).dirty && !this.formulario.get(field).valid )
  };
  
 getDataInForm(){

  if (this.id !== null) {
   this.formulario.patchValue(
    {
      id:this.contactoSVC.contactos[this.id].id,
      nombre:this.contactoSVC.contactos[this.id].nombre,
      celular:this.contactoSVC.contactos[this.id].celular,
      direccion:this.contactoSVC.contactos[this.id].direccion,
      fecha:this.contactoSVC.contactos[this.id].fecha,
    })
    this.sendControllsEdit() 
  }
 };

  sendControllsEdit(){
   this.formulario.valueChanges.subscribe((value) => {
     this.contactoSVC.contactos[this.id] = new Contacto(value.id,value.nombre,value.celular,value.direccion,value.fecha)
    })
 }

};
