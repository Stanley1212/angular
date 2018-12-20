import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/Producto';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public Productos:Array<Producto>;

  constructor() { 

     this.Productos=[
      new Producto('JB01','Jabon niveo',25,'Jabon en barra ni veo'),
      new Producto('PN01','Pan Pepin',50,'Funda de Pan Pepin'),
      new Producto('J801','Jabon ',25,'Jabon liquido'),
      new Producto('P1','Pan panadero',50,'Funda de Pan panpa'),
      new Producto('P1','Pan panadero',50,'Funda de Pan panpa'),
      new Producto('P1','Pan panadero',50,'Funda de Pan panpa')
    ];

    console.log(this.Productos);
  }

  ngOnInit() {
  }

}
