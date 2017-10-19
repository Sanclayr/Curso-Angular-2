import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  aluno: any = {};
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if(this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
