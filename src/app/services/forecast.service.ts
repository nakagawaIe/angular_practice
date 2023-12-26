import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IForecastItem } from '../types/forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  fetchForecast(params: IForecastRequestParams) {
    // paramsをレコードとしてURLSearchParamsに渡したいが、型が合わないので変換する
    const map = (Object.keys(params) as (keyof IForecastRequestParams)[]).map(k => [k, `${params[k]}`]);
    const searchParam = new URLSearchParams(map);
    return this.http.get<IForecastResponse>(`${this.url}?${searchParam.toString()}`);
  }
}

interface IForecastRequestParams {
  appid: string;
  units: string;
  lat?: string;
  lon?: string;
  id?: number;
}

interface IForecastResponse {
  list: IForecastItem[];
}

