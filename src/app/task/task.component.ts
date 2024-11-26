import { Component, Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 // showModal: boolean;
  @Input() val: any;
  @Output() delete = new EventEmitter();
  //@Output() update = new EventEmitter();
  constructor(private router: Router){
    
  }
  deletetask() {
    this.delete.emit(this.val.taskid);
  }
  updatetask() {
  this.router.navigate(['/update'],{queryParams: {
    //name: this.val.name, desc: this.val.description, duetime: this.val.duetime, priority: this.val.priority, 
    taskid: this.val.taskid 
  }})
  }
}



