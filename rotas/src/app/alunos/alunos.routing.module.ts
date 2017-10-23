import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlunosGuard } from './../guards/alunos.guard';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
    {
        path: '', component: AlunosComponent, canActivateChild: [AlunosGuard],
        children: [
            { path: 'novo', component: AlunosFormComponent },
            {
                path: ':id', component: AlunoDetalheComponent,
                resolve: {aluno : AlunoDetalheResolver}
            },
            {
                path: ':id/editar', component: AlunosFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunosRoutingModule { }