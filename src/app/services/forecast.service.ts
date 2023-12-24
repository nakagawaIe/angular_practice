import { Injectable } from '@angular/core';
import { IForecastItem } from '../types/forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor() { }

  async fetchForecast(params: IForecastRequestParams): Promise<IForecastItem[]> {
    // paramsをレコードとしてURLSearchParamsに渡したいが、型が合わないので変換する
    const map = (Object.keys(params) as (keyof IForecastRequestParams)[]).map(k => [k, `${params[k]}`]);
    const searchParam = new URLSearchParams(map);
    const data = await fetch(`${this.url}?${searchParam.toString()}`);
    const result = await data.json();
    return result.list;
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

