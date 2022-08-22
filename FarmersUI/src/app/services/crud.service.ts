import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { CRUD } from '../models/crud';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  private url = 'CRUD';

  constructor(private http: HttpClient) { }

  public getRead(): Observable<CRUD[]> {
    return this.http.get<CRUD[]>(`${environment.apiURL}/${this.url}`);
  }
}
