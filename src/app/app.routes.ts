import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

export const routes: Routes = [
    
    //Creating Routes in aplication
    {path: 'inicio', component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path:'', redirectTo: '/inicio', pathMatch: 'full'}

];
