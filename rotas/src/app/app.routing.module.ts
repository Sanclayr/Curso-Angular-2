import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';


const appRoutes: Routes = [
  {path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
//   {path:'cursos', component:CursosComponent},
//   {path:'curso/:id', component:CursoDetalheComponent},
  {path:'login', component:LoginComponent},
//   {path:'naoEcontrado', component:CursoNaoEncontradoComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}