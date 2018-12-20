import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/Contacto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contacto:Contacto;
  constructor() { 
    this.contacto=new Contacto('','','','');
  }

  ngOnInit() {
  }

}
