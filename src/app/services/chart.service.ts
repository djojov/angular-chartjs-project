import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private url = '/charts';

  constructor(private http: HttpClient) {}

  getChartData() {
    const url = `${environment.baseUrl}${this.url}`;
    return this.http.get(url);
  }
}
