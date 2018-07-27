import ToDo from '../models/todo.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TodoService {
	api_url = 'http://localhost:3000/api/todos';

	constructor(
		private http: HttpClient
	){ }

	createTodo(todo: ToDo): Observable<any>{
		return this.http.post(this.api_url, todo);
	}

	getToDos(): Observable<ToDo[]>{
		return this.http.get(this.api_url).map(res => {
			return res['data'].docs as ToDo[];
		});
	}

	editTodo(todo: ToDo){
		let editUrl = '${this.api_url}';

		return this.http.put(this.api_url, todo);
	}

	deleteTodo(id: string): any{
		let deleteUrl = this.api_url.concat('/' + id);
		
		return this.http.delete(deleteUrl).map(res => {
			return res;
		});
	}

	private handleError(error: any): Promise<any>{
		console.error('An error occurred.', error);
		return Promise.reject(error.message || error);
	}
}
