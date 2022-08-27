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

  public updateCrud(crud: CRUD): Observable<CRUD[]> {
    return this.http.put<CRUD[]>(`${environment.apiURL}/${this.url}`,
    crud
    );
  }

  public createCrud(crud: CRUD): Observable<CRUD[]> {
    return this.http.post<CRUD[]>(`${environment.apiURL}/${this.url}`,
    crud
    );
  }

  public deleteCrud(crud: CRUD): Observable<CRUD[]> {
    return this.http.delete<CRUD[]>(`${environment.apiURL}/${this.url}/${crud.id}`);
  }
}
