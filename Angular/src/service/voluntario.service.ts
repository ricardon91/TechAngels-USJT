import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Subject } from "rxjs";
import { Voluntario } from "src/models/voluntario.model";

@Injectable({ providedIn: 'root' })

export class VoluntarioService {

    private voluntarios: Voluntario[] = [];
    private listaVoluntarioAtualizada = new Subject<Voluntario[]>()    

    constructor(private httpClient: HttpClient) {
    }

    getVoluntarios(): void {
        this.httpClient.get<{ mensagem: string, voluntarios: Voluntario[] }>('http://localhost:3000/api/voluntarios').subscribe((dados) => {
            this.voluntarios = dados.voluntarios;
            this.listaVoluntarioAtualizada.next([...this.voluntarios]);
        })        
    }

    adicionarVoluntario(
            nome: string,
            fone: string,
            email: string,
            cpf: string,
            cep: string,
            endereco: string,
            numero: string,
            bairro: string,
            cidade: string,
            uf: string,
            complemento: string,
            nascimento: Date,
            sexo: string,
            escolaridade: string,
            profissao: string
        ) {
    const voluntario: Voluntario = {
            nome: nome,
            fone: fone,
            email: email,
            cpf: cpf,
            cep: cep,
            endereco: endereco,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            complemento: complemento,
            nascimento: nascimento,
            sexo: sexo,
            escolaridade: escolaridade,
            profissao: profissao
        };
        debugger
        this.httpClient.post<{mensagem: string}>('http://localhost:3000/api/voluntarios', voluntario).subscribe((dados) =>{
            console.log(dados.mensagem);
            this.voluntarios.push(voluntario);
            this.listaVoluntarioAtualizada.next([...this.voluntarios])
        })        
    }

    getListaDeVoluntariosAtualizadaObservable() {
        return this.listaVoluntarioAtualizada.asObservable();
    }

    buscarCep(cep:string){
        //Variavel cep apenas com digitos
        cep = cep.replace(/\D/g, '');

        //Verifica se campo cep possui valor
        if(cep !== ''){
            const validaCep = /^[0-9]{8}$/;

            //Valida o formato  do CEP
            if(validaCep.test(cep)){
                return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`);
            }
        }

        return of({});
    }
}