import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { IFormCanDeactivate } from './../../guards/iform-candeactivate';


@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription;
  private formMudou: boolean = false;

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

  onInput(){
    this.formMudou = true;
  }

  podeMudarRota(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair dessa página!');
    }
    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
