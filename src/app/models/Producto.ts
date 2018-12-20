export class Producto{

   Codigo:string;
   Nombre:string;
   Precio:number;
   Descripcion:string;

   constructor(_Codigo:string,_Nombre:string,_Precio:number,_Descripcion:string){
        this.Codigo=_Codigo;
        this.Nombre=_Nombre;
        this.Precio=_Precio;
        this.Descripcion=_Descripcion;
   }
}