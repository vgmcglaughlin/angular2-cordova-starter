import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'step-1',
  template: '<div class="step"><h2>Hello, Step 1</h2></div>',
  host: {'class' : 'ng-animate step-container'}
})
export class Step1Component implements OnInit {

  constructor() {}

  ngOnInit() {}
}
