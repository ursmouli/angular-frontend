import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './gaurds/auth.gaurd';
import { Roles } from './enum/roles';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {
      path: 'welcome', 
      component: WelcomeComponent, 
      canActivate: [AuthGuard], 
      data: { roles: [Roles.USER, Roles.ADMIN] } 
    },
    {
      path: 'admin', 
      component: AdminComponent, 
      canActivate: [AuthGuard], 
      data: { roles: [Roles.ADMIN] } 
    },
    {
      path: 'user', 
      component: UserComponent, 
      canActivate: [AuthGuard], 
      data: { roles: [Roles.USER] } 
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forbidden', component: ForbiddenComponent },
    { path: '**', redirectTo: 'login' } // Default route
];
