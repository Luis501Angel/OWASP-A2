import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import * as CryptoJS from 'crypto-js'; //Se usa la libreria CryptoJS
import { CookieService } from '../../services/cookie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-session-expiration',
  templateUrl: './session-expiration.component.html',
  styleUrls: ['./session-expiration.component.css']
})
export class SessionExpirationComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  correo: string;
  password: string;
  usuario: Usuario;
  session: boolean;
  credencial: string;
  msgIngresar: string;

  ngOnInit(): void {
    this.session = false;
  }

  signIn() {
    if (this.session == true) {
      if (this.credencial === 'localstorage') {
        this.usuario = new Usuario();
        console.log('Credenciales guardadas');
        this.usuario.correo = this.correo;
        this.usuario.password = this.password;
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
      } else if (this.credencial === 'sessionstorage') {
        this.usuario = new Usuario();
        console.log('Credenciales guardadas');
        this.usuario.correo = this.correo;
        this.usuario.password = this.password;
        sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
      } else if (this.credencial === 'cookie') {
        console.log('Credenciales guardadas');
        this.usuario = new Usuario();
        this.usuario.correo = this.correo;
        this.usuario.password = this.password;
        this.cookieService.setWithExpiryInSeconds("sessionId", JSON.stringify(this.usuario), 10);
      }
      Swal.fire("Inicio de sesión", "El inicio de sesión fue correcto", 'success');
    } else {
      console.log('Correo: ' + this.correo);
      console.log('Contraseña: ' + this.encriptar(this.password));
      console.log('No recordar credenciales');
      Swal.fire("Inicio de sesión", "El inicio de sesión fue correcto", 'success');
    }
  }

  cambiar() {
    this.session = !this.session;
  }

  encriptar(password: string){
    return CryptoJS.AES.encrypt(password, '12345');
  }
}
