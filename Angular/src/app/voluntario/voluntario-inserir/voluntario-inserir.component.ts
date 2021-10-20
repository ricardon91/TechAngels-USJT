import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VoluntarioService } from 'src/service/voluntario.service';

@Component({
  selector: 'app-voluntario-inserir',
  templateUrl: './voluntario-inserir.component.html',
  styleUrls: ['./voluntario-inserir.component.css']
})
export class VoluntarioInserirComponent implements OnInit {

  constructor(public voluntarioService: VoluntarioService) { }

  ngOnInit(): void {
  }

  adicionarVoluntario(form: NgForm) {
    if (form.invalid) {
        return;
    }

    this.voluntarioService.adicionarVoluntario(
        form.value.nome,
        form.value.email,
        form.value.cpf,
        form.value.cep,
        form.value.fone,
        form.value.endereco,
        form.value.numero,
        form.value.bairro,
        form.value.cidade,
        form.value.uf,
        form.value.complemento
    );
    form.resetForm();        
}

}