import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';
import { AuthComponent } from './auth/auth.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { NewtasktableComponent } from './newtasktable/newtasktable.component';
import { UpdatetableComponent } from './updatetable/updatetable.component';
import { LoadspinnerComponent } from './loadspinner/loadspinner.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'task', component: TaskComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'tasklist', component: TasklistComponent},
  { path: 'newtasktable', component: NewtasktableComponent},
  { path: 'update', component: UpdatetableComponent},
  { path: 'loadspinner', component: LoadspinnerComponent},
  { path: '**', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
