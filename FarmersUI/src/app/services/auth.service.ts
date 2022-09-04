import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({ 
  providedIn: 'root'
})
export class AuthService {
  private url = 'Auth';

  constructor(private http: HttpClient) { }

  public register(user: User): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/${this.url}/register`,user);
  }

  public login(user: User): Observable<string> {
    return this.http.post(`${environment.apiURL}/${this.url}/login`, user, { responseType: 'text'});
  }

  public getMe(): Observable<string> {
    return this.http.get<string>(`${environment.apiURL}/${this.url}`);
  }
}
