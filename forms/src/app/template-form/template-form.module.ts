import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TemplateFormComponent,
  ]
})
export class TemplateFormModule { }
