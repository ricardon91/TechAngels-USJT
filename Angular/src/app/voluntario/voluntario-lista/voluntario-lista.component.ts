import { Component, OnInit, ViewChild } from '@angular/core';
import { Voluntario } from 'src/models/voluntario.model';
import { VoluntarioService } from 'src/service/voluntario.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-voluntario-lista',
  templateUrl: './voluntario-lista.component.html',
  styleUrls: ['./voluntario-lista.component.css']
})
export class VoluntarioListaComponent implements OnInit {
  
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['nome', 'email', 'fone', 'profissao' ,'endereco', 'numero', 'uf']
  voluntarios: Voluntario[] = [];
  private voluntariosSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private voluntarioService: VoluntarioService) { }

  ngOnInit(): void {
    this.grid()
  }

  grid() {
    this.voluntarioService.getVoluntarios(1, 10);
    this.voluntariosSubscription = this.voluntarioService.getListaDeVoluntariosAtualizadaObservable()
      .subscribe((voluntarios: Voluntario[]) => {
        this.voluntarios = voluntarios;
        this.dataSource = new MatTableDataSource<any>(this.voluntarios);
        this.dataSource.paginator = this.paginator;
      });
  }

}
