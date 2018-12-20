import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatosService {

  public url: string;
  constructor( public _http:HttpClient) {
    this.url="https://reqres.in/"
   }

   getUser(userid):Observable<any>{

    return this._http.get(this.url+'api/users/'+userid);
   }
}
