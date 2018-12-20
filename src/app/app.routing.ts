//importar modulos 
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//Importar Componentes
import { ContactComponent } from './contact/contact.component';
import { MuestrasComponent } from './muestras/muestras.component';
import { ProductsComponent } from './products/products.component';
import { DivComponent } from './div.component';
import { UsuarioComponent } from './usuario/usuario.component';

const AppRoutes:Routes =[
    { path:'',component:DivComponent},
    { path:'Muestras',component:MuestrasComponent},
    { path:'Productos',component:ProductsComponent},
    { path:'Contactos',component:ContactComponent},
    { path:'Usuarios',component:UsuarioComponent},
    { path:'**',component:DivComponent}
];

export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders=RouterModule.forRoot(AppRoutes);