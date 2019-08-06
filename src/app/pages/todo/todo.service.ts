import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { mergeMap } from 'rxjs/operators';
import { Task } from './model/task';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private http: HttpClient, private authService: NbAuthService) { }

    public createTask(task: string): Observable<HttpEvent<Task>> {
        return this.authService.getToken().pipe(mergeMap(
            (token: NbAuthToken) => {
                return this.http.post<Task>(
                    '/tasks/update', '{ "task" : "' + task + '" }', this.getRequestOptions(token)
                );
            }
        ));
    }

    public tasksList(): Observable<HttpEvent<Task[]>> {
        return this.authService.getToken().pipe(mergeMap(
            (token: NbAuthToken) => {
                return this.http.post<Task[]>(
                    '/tasks/list', '', this.getRequestOptions(token)
                );
            }
        ));
    }

    public taskDelete(task: Task): Observable<any> {
        return this.authService.getToken().pipe(mergeMap(
            (token: NbAuthToken) => {
                return this.http.post(
                    '/tasks/delete', JSON.stringify(task), this.getRequestOptions(token)
                );
            }
        ));
    }

    private getRequestOptions(token: NbAuthToken): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token.getValue()
            })
        };
    }
}
