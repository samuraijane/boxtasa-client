import { Component, OnInit, Output } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject } from 'rxjs';

import { Code } from './../interfaces';
import { DetailsService } from './../details.service';
import { FetchCodesService } from './../fetch-codes.service';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.scss'],
  providers: [DetailsService, FetchCodesService]
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
      code.sampleNames.forEach((item, index) => {
        if(item.toLocaleLowerCase().indexOf(filterBy) !== -1) {
          value = item.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }
      })
      return value;
    });
  }

  constructor(
    private detailsService: DetailsService,
    private fetchCodesService: FetchCodesService,
    public breakpointObserver: BreakpointObserver
  ) {}

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
        this.codes = results;
        this.filteredCodes = this.codes;
      },
      error => this.errorMessage = <any>error
    );

    this.detailsService.detailsStream$.subscribe(detail => {
      if(!detail) {
        this.filteredCodes = this.codes;
      }
      this.codeDetails = detail;
    });
  }

  viewport500 = false;

  selectCode = (code) => {
    this.detailsService.setDetails(code);
    this.filteredCodes = [code];
  }

  codes: Array<Code> = [];
  codeDetails: Code;
  errorMessage: string = '';
  filteredCodes: Array<Code> = [];
}
