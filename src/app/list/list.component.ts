import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

  
})
export class ListComponent implements OnInit{
  autos: Automovil[];
  autoSeleccionado: Automovil;
  
  closeResult = '';
  
  constructor(public modal:NgbModal){
    this.autos=AUTOMOVILES;
    this.autoSeleccionado=this.autos[0];
  }

 
  

  ngOnInit(): void {
    this.autos=AUTOMOVILES;
  }

  onSelect(auto: Automovil){
    this.autoSeleccionado=auto;
  }

  
}