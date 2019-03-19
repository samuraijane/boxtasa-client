import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { FetchCodesService } from './../fetch-codes.service';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.scss'],
  providers: [FetchCodesService]
})
export class CodeListComponent implements OnInit {
  
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCodes = this.listFilter ? this.performFilter(this.listFilter) : this.codes;
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.codes.filter((code) => {
      let value;
      code.sampleOrganizations.forEach((item, index) => {
        if(item.indexOf(filterBy) !== -1) {
          value = item.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }
      })
      return value;
    });
  }

  constructor(private fetchCodesService: FetchCodesService, public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(min-width: 500px)'])
    .subscribe((state: BreakpointState) => {
      if(state.matches) {
        this.viewport500 = true;
      } else {
        this.viewport500 = false;
      }
    });
    
    this.fetchCodesService.search()
    .subscribe(
      results => {
        this.codes = results.codes;
        this.filteredCodes = this.codes;
      },
      error => this.errorMessage = <any>error
    );
  }

  @Output() broadcastDetailsBind = new EventEmitter<string>();

  viewport500 = false;

  selectCode = (code) => {
    this.broadcastDetailsBind.emit(code);
  }

  codes = [];
  filteredCodes = [];
  errorMessage: string;

}
