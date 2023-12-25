

import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './modules/weather.modules';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cityName:string = 'Abuja'
  weatherData?: weatherData

 constructor(private weatherServices: WeatherService) {}
 
 ngOnInit(): void {
  this.getWeatherData(this.cityName)
 }

 onSubmit() {
  this.getWeatherData(this.cityName)
  this.cityName=''
 }

 private getWeatherData(cityName:string) {
  this.weatherServices.getWeatherData(cityName)
  .subscribe({
   next: (response) => {
     this.weatherData = response
     console.log(this.weatherData)
   }
  })
 }
}
