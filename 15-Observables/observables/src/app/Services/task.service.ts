import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService{
    // createTask: EventEmitter<string> = new EventEmitter<string>();

    //* Using Subject

    createTask:Subject<any> = new Subject<string>();

    onCreateTask(value:string){
        // this.createTask.emit(value);
        this.createTask.next(value);
    }
}