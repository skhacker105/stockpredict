import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEquitiesResponse } from '../interfaces/equities-response';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getStockNamesAndSymbols(): Observable<IEquitiesResponse> {
    return this.http.get<IEquitiesResponse>('assets/Equities.json');
  }
}
