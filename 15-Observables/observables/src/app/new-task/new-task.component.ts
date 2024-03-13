import { Component } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  newTask:string = ''

  constructor(private taskService: TaskService){}


  addTask(){
    this.taskService.onCreateTask(this.newTask)    
  }
}
