import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VoluntarioService } from 'src/service/voluntario.service';

@Component({
  selector: 'app-voluntario-inserir',
  templateUrl: './voluntario-inserir.component.html',
  styleUrls: ['./voluntario-inserir.component.css']
})
export class VoluntarioInserirComponent implements OnInit {

  form: FormGroup;

  constructor(public voluntarioService: VoluntarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      cpf: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(11)]
      }),
      nascimento: new FormControl(null, {
        validators: [Validators.required]
      }),
      sexo: new FormControl(null, {
        validators: [Validators.required]
      }),
      fone: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(13)]
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      cep: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(9)]
      }),
      endereco: new FormControl(null),
      bairro: new FormControl(null),
      cidade: new FormControl(null),
      uf: new FormControl(null),
      complemento: new FormControl(null),
      numero: new FormControl(null, {
        validators: [Validators.required]
      }),
      escolaridade: new FormControl(null, {
        validators: [Validators.required]
      }),
      profissao: new FormControl(null, {
        validators: [Validators.required]
      }),
    })
  }  

  //adicionar voluntário
  adicionarVoluntario() {
    if (this.form.invalid) {
      return;
    }
    debugger
    this.voluntarioService.adicionarVoluntario(
      this.form.value.nome,
      this.form.value.fone,
      this.form.value.email,
      this.form.value.cpf,
      this.form.value.cep,
      this.form.value.endereco,
      this.form.value.numero,
      this.form.value.bairro,
      this.form.value.cidade,
      this.form.value.uf,
      this.form.value.complemento,
      this.form.value.nascimento,
      this.form.value.sexo,
      this.form.value.escolaridade,
      this.form.value.profissao
    ).subscribe(result => {
      console.log(result);
      this.toastr.success("Voluntário cadastrado com sucesso!");
    },
      err => {
        this.toastr.error("Voluntário não cadastrado!", err);
      }
    );
    this.form.reset();
  }

  //validador de forms
  findInvalidControls() {
    const invalid = [];
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

  //buscar cep na API 
  buscarCep() {
    debugger
    const cep = this.form.value.cep;

    if (cep != null && cep !== '') {
      this.voluntarioService.buscarCep(cep)
        .subscribe(dados => this.populaDadosForm(dados, this.form));
    }
  }

  //Popular formulario após buscar cep
  populaDadosForm(dados: any, form: any) {
    debugger
    this.form.setValue({
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