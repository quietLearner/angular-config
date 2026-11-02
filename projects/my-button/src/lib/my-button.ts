import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'lib-my-button',
  styles: ``,
  template: `<button><ng-content></ng-content></button>`,
})
export class MyButton {}
