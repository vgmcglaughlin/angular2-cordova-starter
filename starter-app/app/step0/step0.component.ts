import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'step-0',
  template: '<div class="step"><h2>Hello, Step 0</h2></div>',
  host: {'class' : 'ng-animate step-container'}
})
export class Step0Component implements OnInit {

  constructor() {}

  ngOnInit() {}
}
