import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './components/usuario/usuario.module';
import { AlunoModule } from './components/aluno/aluno.module';
import { SharedModule } from './shared';
import { AuthModule } from './components/auth/auth.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PagesComponent } from './components/pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    AlunoModule,
    AuthModule,
    SharedModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
