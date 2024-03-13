import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss']
})
export class ShowTaskComponent implements OnInit{
  tasks: string[] = ['task 1', 'task 2', 'task 3'];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.createTask.subscribe(
      (value:string)=>{
        this.tasks.push(value);
      }
    )
  }
}
