import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VarService {
  // constructor(private http: HttpClient) {}

  // getData(variableId: string): Observable<any> {
  //   return this.http.get(`/api/get/${variableId}`);
  // }

  // queryData(variableId: string, queryParams: any): Observable<any> {
  //   return this.http.post(`/api/query/${variableId}`, queryParams);
  // }

  // updateData(variableId: string): Observable<any> {
  //   return this.http.put(`/api/update/${variableId}`, {});
  // }

  // getLink(variableId: string): Observable<any> {
  //   return this.http.get(`/api/link/${variableId}`);
  // }
}
