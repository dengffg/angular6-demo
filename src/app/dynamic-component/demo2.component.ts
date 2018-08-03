import { Component, Input } from "@angular/core";

@Component({
  template: `
    <ul>
      <li *ngFor="let item of items">{{item}}</li>
    </ul>
    <button (click)="alertTip()">组件2</button>
  `,
})
export class DynamicDemo2Component {
  @Input() items;

  alertTip() {
    alert('我是交通工具');
  }
}