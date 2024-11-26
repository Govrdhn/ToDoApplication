import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SupabaseService } from '../supabase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  specificRoute = 'login';
  userForm: FormGroup;

  constructor(private formbulider: FormBuilder, private auth: SupabaseService, private router: Router, private activatedroute: ActivatedRoute) {
    this.userForm = this.formbulider.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password: ['', Validators.required]
    });
    console.log('before:' + localStorage.getItem('user_id'))
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.auth.login(this.userForm.value.email, this.userForm.value.password)
        .then((res: any) => {
          console.log(res);
          localStorage.removeItem('user_id')
          console.log('before:' + localStorage.getItem('user_id')) //ghjk
          console.log(res)
          // localStorage.setItem('user_id', res.data.user.id);
          // console.log('local storage:'+localStorage.getItem('user_id'))
          if (res.error === null) {
            console.log("hello")
            this.router.navigateByUrl('/tasklist');
          }
          else {
            alert('login failed!');
          }
        }).catch((err: any) => {
          console.log(err);
        })
    }
  }
}