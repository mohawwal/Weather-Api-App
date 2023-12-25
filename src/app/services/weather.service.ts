// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from '../Environments/environment';
// // import { weatherData } from '../modules/weather.modules';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {

//   constructor(private http: HttpClient) { }

//   getWeatherData(cityName:string): Observable<any> {
//      return this.http.get<any>(environment.weatherApiBaseUrl, {
//       headers: new HttpHeaders()
//       .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
//       .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
//       params: new HttpParams()
//       .set('city',cityName)
//       .set('units', 'metric')
//       .set('mode', 'json')
//     })
//   }
// }

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from '../Environments/environment';
import { Observable } from 'rxjs';
import { weatherData } from '../modules/weather.modules';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherData(cityName:string): Observable<any> {
    return this.http.get<weatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('city', cityName)
    //.set('units', 'metric')
    //.set('mode', 'json')
    })
  }
  
}
