import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserRegistrationComponent } from './components/registration/user-registration/user-registration.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './gaurds/auth.gaurd';
import { Roles } from './enum/roles';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { StudentRegistrationComponent } from './components/registration/student-registration/student-registration.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

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
      data: { roles: [Roles.ADMIN] } ,
      children: [
        { path: 'dashboard', component: AdminDashboardComponent },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
      ]
    },
    {
      path: 'user', 
      component: UserComponent, 
      canActivate: [AuthGuard], 
      data: { roles: [Roles.USER] } 
    },
    { path: 'login', component: LoginComponent },
    { path: 'userregistration', component: UserRegistrationComponent },
    {
      path: 'studentregistration', 
      component: StudentRegistrationComponent
    },
    {
      path: 'studentlist',
      component: StudentListComponent,
    },
    { path: 'forbidden', component: ForbiddenComponent },
    { path: '**', redirectTo: 'login' } // Default route
];
