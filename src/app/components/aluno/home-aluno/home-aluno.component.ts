import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';

import { Aluno } from 'src/app/shared/models/aluno.model';

@Component({
  selector: 'app-home-aluno',
  templateUrl: './home-aluno.component.html',
  styleUrls: ['./home-aluno.component.css']
})
export class HomeAlunoComponent {
  
  constructor(
    private alunoService : AlunoService
  ) { }

  ngOnInit(): void {
    
  }
}
