import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[dynamic-host]'
})
export class DynamicHost {
  constructor(public viewContainerRef: ViewContainerRef) { }
}