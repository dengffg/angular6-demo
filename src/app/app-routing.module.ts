import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';

import { DynamicComponent } from "./dynamic-component/dynamic-component.component";

const routes: Route[] = [
  { path: 'dynamic-component', component: DynamicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }