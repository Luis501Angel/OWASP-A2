import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { LogoutProcessComponent } from './components/logout-process/logout-process.component';
import { SessionExpirationComponent } from './components/session-expiration/session-expiration.component';
import { PasswordManagementComponent } from './components/password-management/password-management.component';
import { RecoveryValuesComponent } from './components/recovery-values/recovery-values.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'logout-process',
    component: LogoutProcessComponent
  },
  {
    path: 'session-expiration',
    component: SessionExpirationComponent
  },
  {
    path: 'password-management',
    component: PasswordManagementComponent
  },
  {
    path: 'recovery-values',
    component: RecoveryValuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
