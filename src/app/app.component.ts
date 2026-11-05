// src/app/app.component.ts

import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {
  constructor() {
    // Al llegar a /#casos desde otra página, que el nav fijo no tape el inicio de la sección.
    inject(ViewportScroller).setOffset([0, 80]);
  }
}
