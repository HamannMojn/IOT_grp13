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

  turnOn_OffMotor(ip: DiscoBallIP): Observable<DiscoBallIP> {
    return this.http.put<DiscoBallIP>(`${this.apiUrl}/turn_On_Off_Motor`, ip)
    .pipe(
      catchError(
        this.handleError('turn on_off motor', ip)));
  }

  turnOn_OffLED(ip: DiscoBallIP): Observable<DiscoBallIP> {
    return this.http.put<DiscoBallIP>(`${this.apiUrl}/turn_On_Off_LED`, ip)
    .pipe(
      catchError(
        this.handleError('turn on_off LED', ip)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
