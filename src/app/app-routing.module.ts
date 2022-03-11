import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChildsComponent } from './event/childs/childs.component';
import { ParentssComponent } from './event/parentss/parentss.component';
import { AuthGuard } from './guards/auth.guard';
import { ChildComponent } from './shared/child/child.component';
import { ParentComponent } from './shared/parent/parent.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},  
  {path: 'forgot', component: ForgotComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'admin', 
  canActivate: [AuthGuard],
  loadChildren: () => import('./module/admin/admin.module').then((m) => m.AdminModule),},
  {path: 'child', 
  canActivate: [AuthGuard],
  component: ChildComponent},
  {path: 'parent', 
  canActivate: [AuthGuard],
  component: ParentComponent},
  {path: 'childs', 
  canActivate: [AuthGuard],
  component: ChildsComponent},
  {path: 'parents', 
  canActivate: [AuthGuard],
  component: ParentssComponent},
  {path: '**', component: NotFoundComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
