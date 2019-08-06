import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-todo',
    templateUrl: './create-todo.component.html',
    styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

    public task = '';

    constructor(private todoService: TodoService, private router: Router) { }

    ngOnInit() {
    }

    createTask() {
        this.todoService.createTask(this.task).subscribe(
            (task) => {
                this.router.navigate(['dashboard']);
            }
        );
    }

    showList() {
        this.router.navigate(['dashboard']);
    }

}
