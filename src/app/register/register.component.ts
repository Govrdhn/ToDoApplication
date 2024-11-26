import { Component } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  regForm: FormGroup;

  constructor(private regbulider: FormBuilder, private auth: SupabaseService) {
    this.regForm = this.regbulider.group({
      rname: ['', Validators.required],
      remail: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      rpassword: ['', Validators.required]
    }); 
  }

  submitreg() {
    if (this.regForm.valid) {
      console.log(this.regForm.value);
      this.auth.register(this.regForm.value.remail, this.regForm.value.rpassword)
        .then((res: any) => {
          console.log(res);
        }).catch((err: any) => {
          console.log(err);
        })
    }
  }

}
