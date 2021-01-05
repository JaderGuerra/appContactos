import { Component, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/shared/services/contactos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contador:number = 0;

  nuevoDia:string;
  nuevoMes:string;

  constructor(public contactoSVC:ContactosService) { }

  ngOnInit(): void { 
    this.aumentarContador()
   }

  comprobarFecha(){

    const fecha = new Date()
    const mes = fecha.getMonth() + 1
    const dia = fecha.getDate()
    
    /* Si el dia o el mes son menor a 10 add un 0; si no lo dejamos tal cual*/
    if (dia <= 9 && mes <= 9) {
      this.nuevoDia = `0${dia}`
      this.nuevoMes = `0${mes}`
      return  (`${this.nuevoMes}-${this.nuevoDia}`)
    }else{
      return  (`${mes}-${dia}`)
    }
    
  };

  aumentarContador(){
    const fechaActual = this.comprobarFecha()

    this.contactoSVC.contactos.map((x) => {
      if (fechaActual == x.fecha.substr(5)) {
        this.contador++
      } 
    })

  };

}
