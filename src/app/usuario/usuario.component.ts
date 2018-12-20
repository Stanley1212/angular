import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [DatosService]
})
export class UsuarioComponent implements OnInit {

  public user:any;
  public  userid:any;

  constructor(private _datoservice:DatosService) { this.userid=2;}

  ngOnInit() {

    this.loaduser();
  }

  loaduser(){
    this._datoservice.getUser(this.userid).subscribe(
      result=>{
        console.log(result);
        this.user=result.data;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
