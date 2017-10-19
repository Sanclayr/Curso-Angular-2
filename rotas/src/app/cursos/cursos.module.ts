import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosRoutingModule } from './cursos.routing.module';


import { CursosService } from './cursos.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { AppRoutingModule } from './../app.routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        CursosRoutingModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosService],
})
export class CursosModule { }

