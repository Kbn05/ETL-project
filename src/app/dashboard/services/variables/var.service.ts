import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VarService {
  constructor(private http: HttpClient) {}

  getData(variableId: string): Observable<any> {
    // return this.http.get(`/api/get/${variableId}`);
    return this.http.get(`http://localhost:3000/`);
  }

  queryData(variableId: string, queryParams: any): Observable<any> {
    // return this.http.post(`/api/query/${variableId}`, queryParams);
    return this.http.post(`http://localhost:3000/data`, queryParams);
  }

  // updateData(variableId: string): Observable<any> {
  //   return this.http.put(`/api/update/${variableId}`, {});
  // }

  // getLink(variableId: string): Observable<any> {
  //   return this.http.get(`/api/link/${variableId}`);
  // }
}
