import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnHome(){
    this.router.navigateByUrl('');
  }

}
