import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptocurrencyDetail } from '../models/CryptocurrencyDetail';

@Injectable({
  providedIn: 'root',
})
export class CryptoApiService {
  constructor(private http: HttpClient) {}

  getCryptos(): Observable<CryptocurrencyDetail[]> {
    return this.http.get<CryptocurrencyDetail[]>(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
    );
  }

  getCoinById(id: string): Observable<any> {
    return this.http.get('https://api.coingecko.com/api/v3/coins/' + id);
  }
}
