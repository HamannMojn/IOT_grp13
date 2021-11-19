import { Injectable } from '@angular/core';
import { DiscoBallIP } from './Models/discoballIPmodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);

      // console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
