import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})

export class TasklistComponent implements OnInit {

  tasks: any[] = [];


  constructor(private auth: SupabaseService) { }

  ngOnInit(): void {
    this.fetchtasks();
  }


  fetchtasks() {
    this.auth.fetchtask().subscribe({
      next: (response) => {
        this.tasks = response.data;
        console.log(response.data)
        console.log( this.tasks)
        this.tasks.sort((a, b) => (a.priority < b.priority ? -1 : 1));
        console.log(this.tasks)

      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  deletetaskcard(name: string) {
    this.auth.deletetask(name).subscribe({
      next: (res) => {
        console.log(res)
        console.log(res.error)
        if (res.error === null) {
          this.fetchtasks();
        }
        else {
          console.log('error occured!')
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  /*update(name: string,desc: string,duedate: any,priority: number,taskid: string){
    this.auth.updatetask(name,desc,duedate,priority,taskid).then(res => {
      console.log(res);
    })*/


}


/*export interface taskcard {
  name: string;
  desc: string;
  duetime: number;
  priority: number;

};*/
