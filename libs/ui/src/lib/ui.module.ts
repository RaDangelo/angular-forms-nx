import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { TodosComponent } from './todos/todos.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodosComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent],
  exports: [
    TodosComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent],
})
export class UiModule { }
