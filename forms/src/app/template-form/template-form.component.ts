import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  onSubmit(form) {
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .map(res => res).subscribe(dados => console.log(dados));
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cep, form) {
    //console.log(cep);
    cep = cep.replace(/\D/g,'');
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        this.resetaDadosForm(form);

        //this.http.get("//viacep.com.br/ws/" + cep + "/json")
        this.http.get(`//viacep.com.br/ws/${cep}/json`).map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados, form));

      }
    }
  }

  populaDadosForm(dados, formulario) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero:'' ,
    //     complemento: dados.complemento ,
    //     bairro: dados.bairro ,
    //     cidade: dados.localidade ,
    //     estado: dados.uf
    // }
    // });

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento ,
        bairro: dados.bairro ,
        cidade: dados.localidade ,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        complemento: null ,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
