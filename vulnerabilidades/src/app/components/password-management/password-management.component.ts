import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js'; //Se usa la libreria CryptoJS
import Swal from 'sweetalert2'

@Component({
  selector: 'app-password-management',
  templateUrl: './password-management.component.html',
  styleUrls: ['./password-management.component.css']
})
export class PasswordManagementComponent implements OnInit {

  constructor() { }

  correoVulnerable: string;
  passwordVulnerable: string;

  correoNoVulnerable: string;
  passwordNoVulnerable: string;



  ngOnInit(): void {
  }

  signInVulnerable() {
    console.log('Correo: ' + this.correoVulnerable);
    console.log('Contraseña: ' + this.passwordVulnerable);
    Swal.fire("Inicio de sesión", "El inicio de sesión fue correcto", 'success');
  }

  signInNoVulnerable() {
    if (this.checkPasswPolicy(this.passwordNoVulnerable)) {
      console.log('Correo: ' + this.correoNoVulnerable);
      console.log('Contraseña: ' + CryptoJS.AES.encrypt(this.passwordNoVulnerable, '14456')); //La forma correcta seria usar la llave publica del servidor  
      Swal.fire("Inicio de sesión", "El inicio de sesión fue correcto", 'success');
    } else {
      Swal.fire("Inicio de sesión", "El inicio de sesión fue incorrecto, verifique la contraseña o el correo", 'error');
    }
  }

  checkPasswPolicy(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if (regex.test(password)) {
      return true;
    } else {
      return false;
    }
  }
}
