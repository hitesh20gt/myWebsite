import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Employee } from '../app/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl: string;

  constructor(private http: HttpClient) {
    this.employeeUrl = 'http://localhost:8080/employees';
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<[]>(this.employeeUrl);
  }

  public findAllLogs(csi_ID: string,start: string,end: string): Observable<string[]> {
    //  let params = new HttpParams();
    //  params = params.append('csi_ID',csi_ID);
    //  params = params.append('start',start);
    //  params = params.append('end',end);
    //  console.log(params);

     return this.http.get<[]>(this.employeeUrl+'/'+csi_ID+'/'+start+'/'+end);
  }

  public save(employee: Employee) {
    return this.http.post<Employee>(this.employeeUrl, employee);
  }
}
