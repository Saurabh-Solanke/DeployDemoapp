import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  { path: '', component: ExampleComponent }
];

@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeatureModule { }
