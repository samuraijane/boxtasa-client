import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Code } from './interfaces';

@Injectable()
export class DetailsService {

  constructor() { }

  private details = new Subject<Code>();

  detailsStream$ = this.details.asObservable();

  setDetails(code: Code) {
    this.details.next(code);
  }

  cancelDetails() {
    this.details.next();
  }

}
