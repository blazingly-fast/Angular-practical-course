import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any[]>('http://ng-todo.local/get-all.php');
  }

  register(username, password) {
    return this.http.post<any>('http://ng-todo.local/register.php', {username, password});
  }

  // delete(id) {
  //   return this.http.delete('http://ng-todo.local/delete.php?${id}');
  // }
}
