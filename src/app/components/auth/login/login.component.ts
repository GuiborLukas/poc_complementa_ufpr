import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login, Usuario} from 'src/app/shared';
import { LoginService } from '../services/login.service';
import { SelfRegisterComponent } from './self-register/self-register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;
  show: boolean=false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.loginService.usuarioLogado) {
      this.router.navigate([`${this.loginService.usuarioLogado.papel}`]);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.message = params['error'];
    });
  }

  logar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe(
        (response: Usuario) => {
          if (response != null) {
            let usu = response;
            //alert([`${usu.id}\n${usu.nome}\n${usu.email}\n${usu.telefone}\n${usu.papel}`]);
            this.loginService.usuarioLogado = usu;
            this.loading = false;
            this.router.navigate([`${usu.papel}`]);
          } else {
            this.message = 'Usuário/Senha inválidos.';
          }
        });
    }
    this.loading = false;
  }

  showSelfRegister(){
    this.show=true;
  }
}
