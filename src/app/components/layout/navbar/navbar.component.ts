import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
// type UserRole = 
export class NavbarComponent {
  userRole: string = 'coordenadorOrientador'; // Altere para o perfil do usuário logado:
                              // 'aluno' | 'coordenadorOrientador' | 'orientador' | 'administrador';

  checkRole(role: string): boolean {
    return this.userRole === role;
  }
  logout() {
    // Implementar logout
  }
}
