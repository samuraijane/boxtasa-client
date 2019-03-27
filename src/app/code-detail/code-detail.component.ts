import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Code } from './../interfaces';
import { DetailsService } from './../details.service';

@Component({
  selector: 'app-code-detail',
  templateUrl: './code-detail.component.html',
  styleUrls: ['./code-detail.component.scss'],
  encapsulation: ViewEncapsulation.None // TODO research this further
})
export class CodeDetailComponent implements OnInit {

  constructor(private detailsService: DetailsService) {}

  ngOnInit() {
    this.code = this.codeDetails;
  }

  code: Code;

  @Input() codeDetails: Code

  cancelModal() {
    this.detailsService.cancelDetails();
  }

}
