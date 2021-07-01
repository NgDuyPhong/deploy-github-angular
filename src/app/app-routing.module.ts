import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FacebookGuard } from './guards/facebook.guard';
import { HelloComponentComponent } from './hello-component/hello-component.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    component: HomeComponent,
    canActivate: [FacebookGuard]
  },
  {
    path: 'hello-component',
    component: HelloComponentComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
