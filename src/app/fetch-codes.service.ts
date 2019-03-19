import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, debounceTime, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchCodesService {
  baseUrl: string = 'http://localhost:4200/mocks/codes.json';
  
  constructor(private http: Http) { }
  
  search() {
    return this.http
      .get(`${this.baseUrl}`)
      .pipe(map(res => res.json()));
  }
}
