import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serverdata } from '../../Employee';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeersService {

  constructor(private http: HttpClient) { }

  getData(url:string, pageSize?:number, pageNumber?: number): Observable <Serverdata> {

    const params=new HttpParams().set('page', pageNumber || 0).set('Size', pageSize || 10);
    return this.http.get<Serverdata>(url, {params: params});

  }
  delete(index:number){
    return this.http.delete("http://localhost:8080/employees/" +index);
  }

}