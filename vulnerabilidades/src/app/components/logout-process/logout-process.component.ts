import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import * as CryptoJS from 'crypto-js'; //Se usa la libreria CryptoJS
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout-process',
  templateUrl: './logout-process.component.html',
  styleUrls: ['./logout-process.component.css']
})
export class LogoutProcessComponent implements OnInit {

  constructor() { }

  correo: string;
  password: string;
  usuario: Usuario;
  session: boolean;

  estado: string;

  ngOnInit(): void {
    this.session = false;
    if(sessionStorage.getItem('usuario')){
      this.estado = 'Sesión iniciada';
    } else {
      this.estado = 'Sesión cerrada';
    } 
  }

  signIn(){
    this.estado = 'Sesión iniciada';
    if (this.session == true) {
      this.usuario = new Usuario();
      console.log('Credenciales guardadas');
      this.usuario.correo = this.correo;
      this.usuario.password = this.password;
      sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
      Swal.fire("Inicio de sesión", "El inicio de sesión fue correcto", 'success');
    } else {
      console.log('Correo: ' + this.correo);
      console.log('Contraseña: ' + CryptoJS.AES.encrypt(this.password, '14456'));
      console.log('No recordar credenciales');
      Swal.fire("Inicio de sesión", "El inicio de sesión fue correcto", 'success');
    }
  }

  cambiar() {
    this.session = !this.session;
  }

  cerrarSesion(){
    this.estado = 'Sesión cerrada'
    sessionStorage.removeItem('usuario');
  }

}
