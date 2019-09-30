import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map, debounceTime, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FetchCodesService {
  // TODO consider replacing this with an injector token (see https://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html)
  // baseUrl: string = 'http://localhost:3001/codes';
  baseUrl: string = "https://sj-boxtasa-server.herokuapp.com/codes";

  constructor(private http: Http) {}

  search() {
    return this.http.get(`${this.baseUrl}`).pipe(
      map(res => {
        return res.json();
      })
    );
  }
}
