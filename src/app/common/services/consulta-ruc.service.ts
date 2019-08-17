import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruc } from '../model/Ruc';

@Injectable({
  providedIn: 'root'
})
export class ConsultaRucService {

  constructor(private http: HttpClient) { }

  consultaRuc(ruc: string) {
    return this.http.get<Ruc>(
      `http://localhost:8080/consulta-ruc/${ruc}`);
  }

  // consultaRuc(ruc: number) {
  //   return this.http.get<Ruc>(
  //     'http://wsruc.com/Ruc2WS_JSON.php?tipo=2&ruc=20600892470&token=cXdlcnR5bGFtYXJja19zYUBob3RtYWlsLmNvbXF3ZXJOeQ==');
  // }
}
