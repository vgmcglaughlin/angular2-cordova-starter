import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Step0Component } from './step0/step0.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ],
  templateUrl: 'app/app.component.html'
})
@RouteConfig([
  {
    path: '/step0',
    name: 'Step0',
    component: Step0Component,
    useAsDefault: true
  },
  {
    path: '/step1',
    name: 'Step1',
    component: Step1Component
  },
  {
    path: '/step2',
    name: 'Step2',
    component: Step2Component
  }
])
export class AppComponent { }
