import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DynamicComponent } from "./dynamic-component.component";
import { DynamicDemo1Component } from "./demo1.compnent";
import { DynamicDemo2Component } from "./demo2.component";
import { DynamicHost } from "./dynamic-host.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [
    DynamicComponent, DynamicDemo1Component,
    DynamicDemo2Component, DynamicHost
  ],
  exports: [DynamicComponent],
  entryComponents: [
    DynamicDemo1Component,
    DynamicDemo2Component
  ]
})
export class DynamicModule { }