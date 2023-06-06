import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { AlunoService } from 'src/app/aluno/services/aluno.service';
import { Aluno } from 'src/app/shared/models/aluno.model';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent {

  alunos: Aluno[] = [];
  constructor(
    private alunoService : AlunoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.alunos = this.listarTodosUsuarios();
  }

  listarTodosUsuarios(): Aluno[] {
    return this.alunoService.listarTodosAlunos();
  }

}
