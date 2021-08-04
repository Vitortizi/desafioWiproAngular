import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  url = 'https://www.mercadobitcoin.net/';

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem ticker
  getBtc(): Observable<any> {
    return this.httpClient.get(this.url + 'api/BTC/ticker')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem os trades
  getBtcTrades(): Observable<any> {
    return this.httpClient.get(this.url + 'api/BTC/trades/?since=5700')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
