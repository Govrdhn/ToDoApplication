import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupabaseService } from '../supabase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';


@Component({
  selector: 'app-updatetable',
  templateUrl: './updatetable.component.html',
  styleUrl: './updatetable.component.css'
})
export class UpdatetableComponent {

  updateform : FormGroup
  oldtaskid: any = '';
  oldtask: any='';
  
  constructor(private taskbuilder: FormBuilder, private supabase: SupabaseService, private router: Router, private actrouter: ActivatedRoute) {
     this.updateform = this.taskbuilder.group({
      name: ['', Validators.required],
      priority: ['', Validators.required],
      description: [''],
      duetime: ['']
    });
    console.log(this.actrouter.snapshot.queryParams)
    const res = this.actrouter.snapshot.queryParams;
    console.log(res)
    this.oldtaskid = res;
    console.log(this.oldtaskid.taskid)

    this.supabase.fetchwithid(this.oldtaskid.taskid).subscribe({
      next: (res)=>{
        console.log(res.data![0])
        this.oldtask = res.data![0];
        console.log(this.oldtask)
        console.log(this.oldtask.description)

        this.updateform = this.taskbuilder.group({
          name: [this.oldtask.name, Validators.required],
          priority: [this.oldtask.priority, Validators.required],
          description: [this.oldtask.description],
          duetime: [this.oldtask.duetime]
        });
      }
    })
  }

  update() {
    let error:boolean;
    this.supabase.updatetask(this.updateform.value.name, this.updateform.value.description, this.updateform.value.duetime, this.updateform.value.priority, this.oldtaskid.taskid).subscribe({
      next: (res) => {
        console.log(res)
      }, error: (err) => {
        console.log(err)
        error = true;
      },
      complete:()=>{
        if(error !== true){
          this.router.navigate(['tasklist']);
        }
        else alert('updation error!')
      }
    })
  }
}
