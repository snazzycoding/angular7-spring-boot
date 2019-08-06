import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbActionsModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';

@NgModule({
  declarations: [TodoComponent, CreateTodoComponent, TodoEntryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NbCardModule,
    NbActionsModule,
    FormsModule
  ],
  providers : [
      TodoService
  ]
})
export class TodoModule { }
