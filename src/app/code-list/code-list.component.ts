import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import * as Data from './../../mocks/codes.json';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.scss']
})
export class CodeListComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
    .observe(['(min-width: 500px)'])
    .subscribe((state: BreakpointState) => {
      if(state.matches) {
        this.viewport500 = true;
      } else {
        this.viewport500 = false;
      }
    });
  }

  @Output() broadcastDetailsBind = new EventEmitter<string>();

  viewport500 = false;

  selectCode = (code) => {
    this.broadcastDetailsBind.emit(code);
  }

  codes = Data.codes;

}
