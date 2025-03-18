import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { acercadeComponent } from './pages/acercade/acercade.component';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardbuscadorComponent } from './components/cardbuscador/cardbuscador.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'acercade',component:acercadeComponent},
{path:'productos',component:CardproductosComponent},
{path:'producto/:id',component:CardproductosComponent},
{path:'buscar/:termino',component:CardbuscadorComponent},
{path:'**',component:InicioComponent}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
