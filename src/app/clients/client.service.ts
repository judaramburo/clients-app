import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClientService {

  private urlEndPoint: string = 'http://localhost:8080/api/clients'
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    //return of(CLIENTS);
    return this.http.get<Client[]>(this.urlEndPoint);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, { headers: this.httpHeaders });
  }

}
