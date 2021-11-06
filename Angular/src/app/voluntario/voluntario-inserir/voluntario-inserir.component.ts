import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Voluntario } from 'src/models/voluntario.model';
import { VoluntarioService } from 'src/service/voluntario.service';

@Component({
  selector: 'app-voluntario-inserir',
  templateUrl: './voluntario-inserir.component.html',
  styleUrls: ['./voluntario-inserir.component.css']
})
export class VoluntarioInserirComponent implements OnInit {

  constructor(public voluntarioService: VoluntarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  voluntario: Voluntario; 
  

  adicionarVoluntario(form: NgForm) {
    // debugger
    // if (form.invalid) {
    //   return;
    // }
    debugger
    this.voluntarioService.adicionarVoluntario(
      form.value.nome,
      form.value.fone,
      form.value.email,
      form.value.cpf,
      form.value.cep,      
      form.value.endereco,
      form.value.numero,
      form.value.bairro,
      form.value.cidade,
      form.value.uf,
      form.value.complemento,
      form.value.nascimento,
      form.value.sexo,
      form.value.escolaridade,
      form.value.profissao
    ).subscribe(result =>{
      debugger
        console.log(result);      
        this.toastr.success("Voluntário cadastrado com sucesso!");
      },
      err =>{
        this.toastr.error("Voluntário não cadastrado!", err);
      }
    );
    form.resetForm();
  }

  buscarCep(form: NgForm) {    
    const cep = form.value.cep;

    if (cep != null && cep !== '') {
      this.voluntarioService.buscarCep(cep)
        .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados:any, form:any) {       
    form.setValue({                 
      cep: dados.cep,
      endereco: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
      complemento: dados.complemento,
      nome: form.value.nome,
      cpf: form.value.cpf,
      fone: form.value.fone,
      email: form.value.email,
      numero: form.value.numero,
      nascimento: form.value.nascimento,
      sexo: form.value.sexo,
      escolaridade: form.value.escolaridade,
      profissao: form.value.profissao
    })
  }
}