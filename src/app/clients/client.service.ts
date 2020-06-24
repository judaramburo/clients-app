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

  getClient(id): Observable<Client> {
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, { headers: this.httpHeaders });
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlEndPoint}/${client.id}`, client, { headers: this.httpHeaders});
  }

  delete(id): Observable<Client> {
    return this.http.delete<Client>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

}
