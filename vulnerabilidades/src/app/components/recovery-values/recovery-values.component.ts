import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import * as CryptoJS from 'crypto-js'; //Se usa la libreria CryptoJS
import { MessageService } from '../../services/message.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-recovery-values',
  templateUrl: './recovery-values.component.html',
  styleUrls: ['./recovery-values.component.css']
})
export class RecoveryValuesComponent implements OnInit {

  constructor(public _messageService: MessageService) { }

  correo: string;
  password: string;
  usuario: Usuario;
  session: boolean;
  titulo: string;
  msgIngresar: string;
  visible: boolean;

  ngOnInit(): void {
    this.session = false;
    this.titulo = 'Inicio de sesión';
    this.msgIngresar = 'Ingresar';
    this.visible = true;
  }

  olvideContrasena(){
    this.titulo = 'Recuperar contraseña';
    this.msgIngresar = 'Enviar';
    this.visible = false;
  }

  signIn() {
    this.usuario = new Usuario();
    console.log('Credenciales guardadas');
    this.usuario.correo = this.correo;
    this.usuario.password = this.password;
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    
  }

  encriptar(password: string){
    return CryptoJS.AES.encrypt(password, '12345');
  }

  cambiar() {
    this.session = !this.session;
  }

  recoveryPassword(form){
    this._messageService.sendMessage(form).subscribe(() => {
      Swal.fire("Recuperación de contraseña", "Mensaje para recuperarla enviado a su correo", 'success');
    });
  }

}
