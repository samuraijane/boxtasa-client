import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Code } from '../interfaces';

@Component({
  selector: 'app-code-detail',
  templateUrl: './code-detail.component.html',
  styleUrls: ['./code-detail.component.scss'],
  encapsulation: ViewEncapsulation.None // TODO research this further
})
export class CodeDetailComponent implements OnInit {

  constructor() { }

  data: Code;

  @Input() receiveDetailsBind: Code;
  @Output() cancelDetailsBind = new EventEmitter<string>();

  ngOnInit() {
    this.data = this.receiveDetailsBind;
  }

  cancelModal = () => {
    this.cancelDetailsBind.emit(null);
  }

}
