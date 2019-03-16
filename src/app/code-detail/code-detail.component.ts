import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-code-detail',
  templateUrl: './code-detail.component.html',
  styleUrls: ['./code-detail.component.scss'],
  encapsulation: ViewEncapsulation.None // TODO research this further
})
export class CodeDetailComponent implements OnInit {

  constructor() { }

  data;  // TODO add type via interface

  @Input() receiveDetailsBind;  // TODO use interface type
  @Output() cancelDetailsBind = new EventEmitter<string>();

  ngOnInit() {
    this.data = this.receiveDetailsBind;
  }

  cancelModal = () => {
    this.cancelDetailsBind.emit(null);
  }

}
