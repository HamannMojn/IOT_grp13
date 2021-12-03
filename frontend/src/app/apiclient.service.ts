import { Injectable } from '@angular/core';
import { DiscoBallIP } from './Models/discoballIPmodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})

export class ApiclientService {
  private apiUrl = "http://localhost:5600"

  constructor( private http: HttpClient) { }

  getDiscoBallIPs(): Observable<DiscoBallIP[]> {

    const discoballUrl = `${this.apiUrl}/getDiscoBalls`;
    
    return this.http.get<DiscoBallIP[]>(discoballUrl).pipe(
      tap(_ => console.log("Disco balls ip fetched")),
      catchError(this.handleError<DiscoBallIP[]>('getDiscoBallIPs', []))
    );
  }

  turnOn_OffMotor(ip: DiscoBallIP) {
    return this.http.put<DiscoBallIP>(`${this.apiUrl}/turn_On_Off_Motor`, ip)
    .subscribe(response => console.log(response))
  }

  turnOn_OffLED(ip: DiscoBallIP) {
    return this.http.put<DiscoBallIP>(`${this.apiUrl}/turn_On_Off_LED`, ip)
    .subscribe(response => console.log(response))
  }

  turnOn_OffTempSensor(ip: DiscoBallIP) {
    return this.http.put<DiscoBallIP>(`${this.apiUrl}/Turn_On_Off_Temp_Sensor`, ip)
    .subscribe(response => console.log(response))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
