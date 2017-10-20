import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AlunosGuard } from './../guards/alunos.guard';



const alunosRoutes = [
    {path: '', component: AlunosComponent, canActivateChild:[AlunosGuard],
    children:[
        {path: 'novo', component: AlunosFormComponent},
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/editar', component: AlunosFormComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunosRoutingModule{}