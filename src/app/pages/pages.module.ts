import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { TodoModule } from './todo/todo.module';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    imports: [
        LayoutModule,
        CommonModule,
        TodoModule,
        PagesRoutingModule
    ],
    declarations: [PagesComponent],
})
export class PagesModule { }
