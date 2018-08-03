import { Component, Input } from "@angular/core";

@Component({
  template: `
    <ul>
      <li *ngFor="let item of items">{{item}}</li>
    </ul>
    <button (click)="alertTip()">组件1</button>
  `,
})
export class DynamicDemo1Component {
  @Input() items;
  alertTip() {
    alert('我是水果');
  }
}