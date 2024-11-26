import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newtasktable',
  templateUrl: './newtasktable.component.html',
  styleUrl: './newtasktable.component.css'
})
export class NewtasktableComponent {

  taskform: FormGroup;

  constructor(private taskbuilder: FormBuilder, private createtask: SupabaseService, private router: Router) {
    this.taskform = this.taskbuilder.group({
      name: ['', Validators.required],
      priority: ['', Validators.required],
      description: [''],
      duetime: ['']
    });
  }

  newtask() {
    if (this.taskform.valid) {
      console.log(this.taskform.value);

      this.createtask.submittask(this.taskform.value.name, this.taskform.value.description, this.taskform.value.duetime, this.taskform.value.priority, localStorage.getItem('user_id'))
        .then((res: any) => {
          console.log(res);
          if (res === 'noerror') this.router.navigateByUrl('/tasklist');
        }).catch((err: any) => {
          console.log(err);
        })

    }
  }


}
