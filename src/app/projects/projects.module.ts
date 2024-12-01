import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FizzBuzzComponent } from '../projects/fizz-buzz/fizz-buzz.component';
import { GreekGyroPitaOrderMakerComponent } from '../projects/greek-gyro-pita-order-maker/greek-gyro-pita-order-maker.component';

import { MyShoppingListComponent } from '../projects/my-shopping-list/my-shopping-list.component';
import { ProjectFoodListComponent } from '../projects/my-shopping-list/project-food-list/project-food-list.component';
import { ProjectFormComponent } from '../projects/my-shopping-list/project-form/project-form.component';
import { ProjectHomeListComponent } from '../projects/my-shopping-list/project-home-list/project-home-list.component';

import { SuperSignatureMakerComponent } from '../projects/super-signature-maker/super-signature-maker.component';
import { ToDoAppComponent } from '../projects/to-do-app/to-do-app.component';

@NgModule({
  declarations: [
    ToDoAppComponent,
    SuperSignatureMakerComponent,
    FizzBuzzComponent,
    MyShoppingListComponent,
    ProjectFormComponent,
    ProjectFoodListComponent,
    ProjectHomeListComponent,
    GreekGyroPitaOrderMakerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule {}