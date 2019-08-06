import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

import { Subject, BehaviorSubject } from 'rxjs';
import { Task } from './model/task';
import { Router } from '@angular/router';
import { HttpEvent } from '@angular/common/http';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    public tasks: Subject<Task[]> = new BehaviorSubject<Task[]>([]);

    constructor(private todoService: TodoService, private router: Router) { }

    ngOnInit() {
        this.refresh();
    }

    addTask() {
        this.router.navigate(['/pages/create-task']);
    }

    refresh() {
        this.todoService.tasksList().subscribe((tasks: HttpEvent<Task[]>) => {
            if (tasks) {
                // @ts-ignore
                this.tasks.next(tasks);
            }
        });
    }
}
