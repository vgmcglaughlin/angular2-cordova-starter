import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'step-2',
  template: '<div class="step"><h2>Hello, Step 2</h2></div>',
  host: {'class' : 'ng-animate step-container'}
})
export class Step2Component implements OnInit {

  constructor() {}

  ngOnInit() {}
}
