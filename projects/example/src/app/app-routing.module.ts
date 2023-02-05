import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleGroupComponent } from './pages/example-group/example-group.component';

const routes: Routes = [
  { path: '', component: ExampleGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
