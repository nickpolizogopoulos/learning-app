import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TheBasicsComponent } from './the-basics/the-basics.component';
import { OneDataBindingComponent } from './the-basics/one-data-binding/one-data-binding.component';
import { TwoPropertyBindingComponent } from './the-basics/two-property-binding/two-property-binding.component';
import { ThreeEventBindingComponent } from './the-basics/three-event-binding/three-event-binding.component';
import { FourNgIfComponent } from './the-basics/four-ng-if/four-ng-if.component';
import { FiveNgIfElseComponent } from './the-basics/five-ng-if-else/five-ng-if-else.component';
import { SixNgForComponent } from './the-basics/six-ng-for/six-ng-for.component';
import { SevenNgStyleComponent } from './the-basics/seven-ng-style/seven-ng-style.component';
import { EightNgClassComponent } from './the-basics/eight-ng-class/eight-ng-class.component';
import { NineThankYouComponent } from './the-basics/nine-thank-you/nine-thank-you.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ComponentsDatabindingComponent } from './components-databinding/components-databinding.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { OnePassingDataBetweenComponentsComponent } from './components-databinding/one-passing-data-between-components/one-passing-data-between-components.component';
import { FormComponent } from './components-databinding/one-passing-data-between-components/form/form.component';
import { ListComponent } from './components-databinding/one-passing-data-between-components/list/list.component';
import { TwoViewchildAndNgcontentComponent } from './components-databinding/two-viewchild-and-ngcontent/two-viewchild-and-ngcontent.component';
import { ImportantComponent } from './components-databinding/two-viewchild-and-ngcontent/important/important.component';
import { FormTwoComponent } from './components-databinding/two-viewchild-and-ngcontent/form-two/form-two.component';
import { UnimportantComponent } from './components-databinding/two-viewchild-and-ngcontent/unimportant/unimportant.component';
import { ThreeLifecycleHooksComponent } from './components-databinding/three-lifecycle-hooks/three-lifecycle-hooks.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'the-basics', component: TheBasicsComponent },
  { path: 'components-databinding', component: ComponentsDatabindingComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TheBasicsComponent,
    OneDataBindingComponent,
    TwoPropertyBindingComponent,
    ThreeEventBindingComponent,
    FourNgIfComponent,
    FiveNgIfElseComponent,
    SixNgForComponent,
    SevenNgStyleComponent,
    EightNgClassComponent,
    NineThankYouComponent,
    AboutComponent,
    HomeComponent,
    ErrorComponent,
    ComponentsDatabindingComponent,
    NavbarComponent,
    OnePassingDataBetweenComponentsComponent,
    FormComponent,
    ListComponent,
    TwoViewchildAndNgcontentComponent,
    ImportantComponent,
    UnimportantComponent,
    FormTwoComponent,
    ThreeLifecycleHooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }