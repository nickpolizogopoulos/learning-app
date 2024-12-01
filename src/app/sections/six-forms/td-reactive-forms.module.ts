import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { OneTemplateDrivenFormComponent } from './one-template-driven-form/one-template-driven-form.component';
import { SixFormsComponent } from './six-forms.component';
import { TwoReactiveFormComponent } from './two-reactive-form/two-reactive-form.component';

@NgModule({
  declarations: [
    SixFormsComponent,
    OneTemplateDrivenFormComponent,
    TwoReactiveFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TdReactiveFormsModule {}