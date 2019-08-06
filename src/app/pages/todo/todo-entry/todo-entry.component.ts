import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../model/task';

@Component({
    selector: 'app-todo-entry',
    templateUrl: './todo-entry.component.html',
    styleUrls: ['./todo-entry.component.scss']
})
export class TodoEntryComponent implements OnInit {

    @Input()
    public task: Task;

    @Output()
    public refresh: EventEmitter<number> = new EventEmitter<number>();

    constructor(private todoService: TodoService) { }

    ngOnInit() {
    }

    deleteTask() {
        this.todoService.taskDelete(this.task).subscribe(
            (_void: any) => {
                this.refresh.next(Math.floor(Date.now() / 1000));
            }
        );
    }
}
