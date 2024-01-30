import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//SHARED COMPONENTS
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

//PROJECTS
import { ToDoAppComponent } from './projects/to-do-app/to-do-app.component';
import { SuperSignatureMakerComponent } from './projects/super-signature-maker/super-signature-maker.component';
import { MyShoppingListComponent } from './projects/my-shopping-list/my-shopping-list.component';
import { ProjectFormComponent } from './projects/my-shopping-list/project-form/project-form.component';
import { ProjectFoodListComponent } from './projects/my-shopping-list/project-food-list/project-food-list.component';
import { ProjectHomeListComponent } from './projects/my-shopping-list/project-home-list/project-home-list.component';
import { CalculatorComponent } from './projects/calculator/calculator.component';

//SECTION The Basics
import { OneTheBasicsComponent } from './one-the-basics/one-the-basics.component';
import { OneDataBindingComponent } from './one-the-basics/one-data-binding/one-data-binding.component';
import { TwoPropertyBindingComponent } from './one-the-basics/two-property-binding/two-property-binding.component';
import { ThreeEventBindingComponent } from './one-the-basics/three-event-binding/three-event-binding.component';
import { FourNgIfComponent } from './one-the-basics/four-ng-if/four-ng-if.component';
import { FiveNgIfElseComponent } from './one-the-basics/five-ng-if-else/five-ng-if-else.component';
import { SixNgForComponent } from './one-the-basics/six-ng-for/six-ng-for.component';
import { SevenNgStyleComponent } from './one-the-basics/seven-ng-style/seven-ng-style.component';
import { EightNgClassComponent } from './one-the-basics/eight-ng-class/eight-ng-class.component';
import { NineThankYouComponent } from './one-the-basics/nine-thank-you/nine-thank-you.component';

//SECTION Components & Databinding
import { TwoComponentsDatabindingComponent } from './two-components-databinding/two-components-databinding.component';
import { OnePassingDataBetweenComponentsComponent } from './two-components-databinding/one-passing-data-between-components/one-passing-data-between-components.component';
import { FormComponent } from './two-components-databinding/one-passing-data-between-components/form/form.component';
import { ListComponent } from './two-components-databinding/one-passing-data-between-components/list/list.component';
import { TwoViewchildAndLocalReferencesComponent } from './two-components-databinding/two-viewchild-and-local-references/two-viewchild-and-local-references.component';
import { ImportantComponent } from './two-components-databinding/two-viewchild-and-local-references/important/important.component';
import { FormTwoComponent } from './two-components-databinding/two-viewchild-and-local-references/form-two/form-two.component';
import { UnimportantComponent } from './two-components-databinding/two-viewchild-and-local-references/unimportant/unimportant.component';
import { ThreeLifecycleHooksComponent } from './two-components-databinding/three-lifecycle-hooks/three-lifecycle-hooks.component';

//SECTION Directives
import { ThreeDirectivesComponent } from './three-directives/three-directives.component';
import { OneBasicCustomDirectiveComponent } from './three-directives/one-basic-custom-directive/one-basic-custom-directive.component';
import { BlueBgDirective } from './three-directives/one-basic-custom-directive/blue-bg.directive';
import { BordeauxBgDirective } from './three-directives/one-basic-custom-directive/bordeaux-bg.directive';
import { TwoRendererDirectiveComponent } from './three-directives/two-renderer-directive/two-renderer-directive.component';
import { SmSizeDirective } from './three-directives/two-renderer-directive/sm-size.directive';
import { MdSizeDirective } from './three-directives/two-renderer-directive/md-size.directive';
import { XlSizeDirective } from './three-directives/two-renderer-directive/xl-size.directive';
import { ThreeHostlistenerComponent } from './three-directives/three-hostlistener/three-hostlistener.component';
import { GreenFilterDirective } from './three-directives/three-hostlistener/green-filter.directive';
import { YellowFilterDirective } from './three-directives/three-hostlistener/yellow-filter.directive';
import { FourHostbindingComponent } from './three-directives/four-hostbinding/four-hostbinding.component';
import { SecretButtonDirective } from './three-directives/four-hostbinding/secret-button.directive';
import { FiveBindingToDirectivePropertiesComponent } from './three-directives/five-binding-to-directive-properties/five-binding-to-directive-properties.component';
import { ColoursDirective } from './three-directives/five-binding-to-directive-properties/colours.directive';
import { SixCustomStructuralDirectiveComponent } from './three-directives/six-custom-structural-directive/six-custom-structural-directive.component';
import { UnlessDirective } from './three-directives/six-custom-structural-directive/unless.directive';
import { SevenNgswitchComponent } from './three-directives/seven-ngswitch/seven-ngswitch.component';

//SECTION Services & Dependency Injection
import { FourServicesDependencyInjectionComponent } from './four-services-dependency-injection/four-services-dependency-injection.component';
import { OneLoggingServiceComponent } from './four-services-dependency-injection/one-logging-service/one-logging-service.component';
import { OneServiceButtonComponent } from './four-services-dependency-injection/one-logging-service/one-service-button/one-service-button.component';
import { TwoServiceButtonComponent } from './four-services-dependency-injection/one-logging-service/two-service-button/two-service-button.component';
import { TwoDataServiceComponent } from './four-services-dependency-injection/two-data-service/two-data-service.component';
import { ThreeServiceButtonComponent } from './four-services-dependency-injection/one-logging-service/three-service-button/three-service-button.component';
import { FormDataServiceComponent } from './four-services-dependency-injection/two-data-service/form-data-service/form-data-service.component';
import { ListDataServiceComponent } from './four-services-dependency-injection/two-data-service/list-data-service/list-data-service.component';

//SECTION Observables
import { FiveObservablesComponent } from './five-observables/five-observables.component';
import { OneBasicObservableComponent } from './five-observables/one-basic-observable/one-basic-observable.component';
import { TwoCustomObservableComponent } from './five-observables/two-custom-observable/two-custom-observable.component';
import { ThreeObservableErrorsComponent } from './five-observables/three-observable-errors/three-observable-errors.component';
import { FourObservableCompletionComponent } from './five-observables/four-observable-completion/four-observable-completion.component';
import { FiveMapOperatorComponent } from './five-observables/five-map-operator/five-map-operator.component';
import { SixFilterOperatorComponent } from './five-observables/six-filter-operator/six-filter-operator.component';
import { SevenSubjectsComponent } from './five-observables/seven-subjects/seven-subjects.component';
import { FirstSubjectsComponent } from './five-observables/seven-subjects/first-subjects/first-subjects.component';
import { SecondSubjectsComponent } from './five-observables/seven-subjects/second-subjects/second-subjects.component';

//SECTION Forms
import { SixFormsComponent } from './six-forms/six-forms.component';
import { OneTemplateDrivenFormComponent } from './six-forms/one-template-driven-form/one-template-driven-form.component';
import { TwoReactiveFormComponent } from './six-forms/two-reactive-form/two-reactive-form.component';

//SECTION Data Transformation with Pipes
import { SevenPipesComponent } from './seven-pipes/seven-pipes.component';
import { OneSimpleTransformationComponent } from './seven-pipes/one-simple-transformation/one-simple-transformation.component';
import { TwoCustomPipeComponent } from './seven-pipes/two-custom-pipe/two-custom-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    OneTheBasicsComponent,
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
    PageNotFoundComponent,
    TwoComponentsDatabindingComponent,
    NavbarComponent,
    OnePassingDataBetweenComponentsComponent,
    FormComponent,
    ListComponent,
    TwoViewchildAndLocalReferencesComponent,
    ImportantComponent,
    UnimportantComponent,
    FormTwoComponent,
    ThreeLifecycleHooksComponent,
    ThreeDirectivesComponent,
    OneBasicCustomDirectiveComponent,
    BlueBgDirective,
    BordeauxBgDirective,
    TwoRendererDirectiveComponent,
    SmSizeDirective,
    MdSizeDirective,
    XlSizeDirective,
    ThreeHostlistenerComponent,
    GreenFilterDirective,
    YellowFilterDirective,
    FourHostbindingComponent,
    SecretButtonDirective,
    FiveBindingToDirectivePropertiesComponent,
    ColoursDirective,
    SixCustomStructuralDirectiveComponent,
    UnlessDirective,
    SevenNgswitchComponent,
    ToDoAppComponent,
    SuperSignatureMakerComponent,
    MyShoppingListComponent,
    CalculatorComponent,
    ProjectFormComponent,
    ProjectFoodListComponent,
    ProjectHomeListComponent,
    FourServicesDependencyInjectionComponent,
    OneLoggingServiceComponent,
    OneServiceButtonComponent,
    TwoServiceButtonComponent,
    ThreeServiceButtonComponent,
    TwoDataServiceComponent,
    FormDataServiceComponent,
    ListDataServiceComponent,
    FiveObservablesComponent,
    OneBasicObservableComponent,
    ThreeObservableErrorsComponent,
    TwoCustomObservableComponent,
    FourObservableCompletionComponent,
    FiveMapOperatorComponent,
    SixFilterOperatorComponent,
    SixFormsComponent,
    SevenSubjectsComponent,
    FirstSubjectsComponent,
    SecondSubjectsComponent,
    OneTemplateDrivenFormComponent,
    TwoReactiveFormComponent,
    SevenPipesComponent,
    OneSimpleTransformationComponent,
    TwoCustomPipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }