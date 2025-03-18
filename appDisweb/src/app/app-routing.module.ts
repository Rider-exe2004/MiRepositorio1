import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { acercadeComponent } from './pages/acercade/acercade.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'acercade',component:acercadeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
