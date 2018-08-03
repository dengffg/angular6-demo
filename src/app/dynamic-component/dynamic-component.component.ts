import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DynamicDemo1Component } from './demo1.compnent';
import { DynamicDemo2Component } from './demo2.component';
import { DynamicHost } from './dynamic-host.directive';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponent implements OnInit {
  @ViewChild(DynamicHost) dynamicHost: DynamicHost;

  components = {
    1: DynamicDemo1Component,
    2: DynamicDemo2Component
  }
  componentsData = {
    1: ['苹果', '香蕉', '西红柿'],
    2: ['公车', '地铁', '飞机'],
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() { }

  addComponent(index) {
    //创建组件工厂，
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.components[index]);
    //清空dom 原有内容
    let containerRef = this.dynamicHost.viewContainerRef;
    containerRef.clear();
    //将组建添加到dom中
    let componentRef = containerRef.createComponent(factory);
    //可通过组件输入属性将数据传入组件中
    (<any>componentRef.instance).items = this.componentsData[index];
  }
}
