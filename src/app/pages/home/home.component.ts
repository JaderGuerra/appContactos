import { Component, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/shared/services/contactos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public contactoSVC:ContactosService) { }

  ngOnInit(): void {
  }

}
