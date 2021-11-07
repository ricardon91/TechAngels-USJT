import { map } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { Voluntario } from "src/models/voluntario.model";
import { environment as env } from '../environments/environment';

@Injectable({ providedIn: 'root' })

export class VoluntarioService {

    private voluntarios: Voluntario[] = [];
    private listaVoluntarioAtualizada = new Subject<Voluntario[]>()

    constructor(private httpClient: HttpClient) {
    }    

    getVoluntariosPaginacao(page: number, size: number) {
        let params = new HttpParams();

        params = params.append('page', String(page));
        params = params.append('limit', String(size));

        this.httpClient.get<{ mensagem: string, voluntarios: Voluntario[] }>(env.VOLUNTARIO_URL_BASE, {params}).subscribe((dados) => {
            this.voluntarios = dados.voluntarios;
            this.listaVoluntarioAtualizada.next([...this.voluntarios]);
        })
    }
    
    getVoluntarios():Observable<Voluntario[]> {
        return this.httpClient.get<Voluntario[]>(env.VOLUNTARIO_MAPA_URL_BASE);        
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
        nascimento: string,
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
        return this.httpClient.post<any>(env.VOLUNTARIO_URL_BASE, voluntario)
        .pipe(map((dados:any) => {            
            // this.voluntarios.push(voluntario);
            // this.listaVoluntarioAtualizada.next([...this.voluntarios])
            return dados            
        }))        
    }

    getListaDeVoluntariosAtualizadaObservable() {
        return this.listaVoluntarioAtualizada.asObservable();
    }

    buscarCep(cep: string) {
        //Variavel cep apenas com digitos
        cep = cep.replace(/\D/g, '');

        //Verifica se campo cep possui valor
        if (cep !== '') {
            const validaCep = /^[0-9]{8}$/;

            //Valida o formato  do CEP
            if (validaCep.test(cep)) {
                return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`);
            }
        }

        return of({});
    }
}