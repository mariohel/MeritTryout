import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged: boolean = false;
  currentUser: any = {};
  constructor(private http: HttpClient) { }
  
  login(username, password){
    return this.http.post(environment.API + 'user/login/' , {username: username , password: password});
  }
}
