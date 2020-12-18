import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { user } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<user[]> {
    return this.httpClient.get<user[]>('http://localhost:3000/Users')
  }

  update(id, user) {
    const url = 'http://localhost:3000/Users/' + id
    return this.httpClient.put(url, user)
  }

  delete(id) {
    const url = 'http://localhost:3000/Users/' + id
    return this.httpClient.delete(url)
  }


}
