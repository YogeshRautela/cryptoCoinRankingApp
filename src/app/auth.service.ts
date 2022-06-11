import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// const apiKey = 'coinrankingc032026f93e3b94c047c89523ca837327c4dac81e1070686';
const apiKey = 'coinrankingb8f56e21132eba7ba50268db0fa96cb94a527146480ce6dd'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://api.coinranking.com/v2/coins';
  private proxyUrl = 'https://corsanywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  cryptoData() {
    const url = `${this.proxyUrl}${this.baseUrl}`;
    return this.http
      .get(url, httpOptions)
      .toPromise()
      .then((data) => {
        return data;
      });
  }
}
