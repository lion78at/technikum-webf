import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoveCalculatorResult } from './types';

@Injectable({
  providedIn: 'root'
})
export class LoveCalculatorService {
  constructor(private httpClient: HttpClient) {}

  calculateLove(name1: string, name2: string): Promise<LoveCalculatorResult> {
    const headers = new HttpHeaders()
      .append('API-Key', 'magic-key-42');

    const params = new HttpParams()
      .append('fname', name1)
      .append('sname', name2);

    const options = {
      headers,
      params
    };

    return this.httpClient.get<LoveCalculatorResult>('http://lovecalculator.lion.enterprises', options).toPromise();
  }
}
