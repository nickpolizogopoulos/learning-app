import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//* SHARED COMPONENTS
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './shared-components/about.component';
import { NavbarComponent } from './shared-components/navbar.component';
import { PageNotFoundComponent } from './shared-components/page-not-found.component';
import { FooterComponent } from './shared-components/footer.component';

//* PROJECTS
import { ToDoAppComponent } from './projects/to-do-app/to-do-app.component';
import { SuperSignatureMakerComponent } from './projects/super-signature-maker/super-signature-maker.component';
import { MyShoppingListComponent } from './projects/my-shopping-list/my-shopping-list.component';
import { ProjectFormComponent } from './projects/my-shopping-list/project-form/project-form.component';
import { ProjectFoodListComponent } from './projects/my-shopping-list/project-food-list/project-food-list.component';
import { ProjectHomeListComponent } from './projects/my-shopping-list/project-home-list/project-home-list.component';
import { FizzBuzzComponent } from './projects/fizz-buzz/fizz-buzz.component';
import { GreekGyroPitaOrderMakerComponent } from './projects/greek-gyro-pita-order-maker/greek-gyro-pita-order-maker.component';

//* SECTION The Basics
import { OneTheBasicsComponent } from './sections/one-the-basics/one-the-basics.component';
import { OneDataBindingComponent } from './sections/one-the-basics/one-data-binding/one-data-binding.component';
import { TwoPropertyBindingComponent } from './sections/one-the-basics/two-property-binding/two-property-binding.component';
import { ThreeEventBindingComponent } from './sections/one-the-basics/three-event-binding/three-event-binding.component';
import { FourNgIfComponent } from './sections/one-the-basics/four-ng-if/four-ng-if.component';
import { FiveNgIfElseComponent } from './sections/one-the-basics/five-ng-if-else/five-ng-if-else.component';
import { SixNgForComponent } from './sections/one-the-basics/six-ng-for/six-ng-for.component';
import { SevenNgStyleComponent } from './sections/one-the-basics/seven-ng-style/seven-ng-style.component';
import { EightNgClassComponent } from './sections/one-the-basics/eight-ng-class/eight-ng-class.component';
import { NineThankYouComponent } from './sections/one-the-basics/nine-thank-you/nine-thank-you.component';

//* SECTION Components & Databinding
import { TwoComponentsDatabindingComponent } from './sections/two-components-databinding/two-components-databinding.component';
import { OnePassingDataBetweenComponentsComponent } from './sections/two-components-databinding/one-passing-data-between-components/one-passing-data-between-components.component';
import { FormComponent } from './sections/two-components-databinding/one-passing-data-between-components/form/form.component';
import { ListComponent } from './sections/two-components-databinding/one-passing-data-between-components/list/list.component';
import { TwoViewchildAndLocalReferencesComponent } from './sections/two-components-databinding/two-viewchild-and-local-references/two-viewchild-and-local-references.component';
import { ImportantComponent } from './sections/two-components-databinding/two-viewchild-and-local-references/important/important.component';
import { FormTwoComponent } from './sections/two-components-databinding/two-viewchild-and-local-references/form-two/form-two.component';
import { UnimportantComponent } from './sections/two-components-databinding/two-viewchild-and-local-references/unimportant/unimportant.component';
import { ThreeLifecycleHooksComponent } from './sections/two-components-databinding/three-lifecycle-hooks/three-lifecycle-hooks.component';

//* SECTION Directives
import { ThreeDirectivesComponent } from './sections/three-directives/three-directives.component';
import { OneBasicCustomDirectiveComponent } from './sections/three-directives/one-basic-custom-directive/one-basic-custom-directive.component';
import { BlueBgDirective } from './sections/three-directives/one-basic-custom-directive/blue-bg.directive';
import { BordeauxBgDirective } from './sections/three-directives/one-basic-custom-directive/bordeaux-bg.directive';
import { TwoRendererDirectiveComponent } from './sections/three-directives/two-renderer-directive/two-renderer-directive.component';
import { SmSizeDirective } from './sections/three-directives/two-renderer-directive/sm-size.directive';
import { MdSizeDirective } from './sections/three-directives/two-renderer-directive/md-size.directive';
import { XlSizeDirective } from './sections/three-directives/two-renderer-directive/xl-size.directive';
import { ThreeHostlistenerComponent } from './sections/three-directives/three-hostlistener/three-hostlistener.component';
import { GreenFilterDirective } from './sections/three-directives/three-hostlistener/green-filter.directive';
import { YellowFilterDirective } from './sections/three-directives/three-hostlistener/yellow-filter.directive';
import { FourHostbindingComponent } from './sections/three-directives/four-hostbinding/four-hostbinding.component';
import { SecretButtonDirective } from './sections/three-directives/four-hostbinding/secret-button.directive';
import { FiveBindingToDirectivePropertiesComponent } from './sections/three-directives/five-binding-to-directive-properties/five-binding-to-directive-properties.component';
import { ColoursDirective } from './sections/three-directives/five-binding-to-directive-properties/colours.directive';
import { SixCustomStructuralDirectiveComponent } from './sections/three-directives/six-custom-structural-directive/six-custom-structural-directive.component';
import { UnlessDirective } from './sections/three-directives/six-custom-structural-directive/unless.directive';
import { SevenNgswitchComponent } from './sections/three-directives/seven-ngswitch/seven-ngswitch.component';

//* SECTION Services & Dependency Injection
import { FourServicesDependencyInjectionComponent } from './sections/four-services-dependency-injection/four-services-dependency-injection.component';
import { OneLoggingServiceComponent } from './sections/four-services-dependency-injection/one-logging-service/one-logging-service.component';
import { OneServiceButtonComponent } from './sections/four-services-dependency-injection/one-logging-service/one-service-button/one-service-button.component';
import { TwoServiceButtonComponent } from './sections/four-services-dependency-injection/one-logging-service/two-service-button/two-service-button.component';
import { TwoDataServiceComponent } from './sections/four-services-dependency-injection/two-data-service/two-data-service.component';
import { ThreeServiceButtonComponent } from './sections/four-services-dependency-injection/one-logging-service/three-service-button/three-service-button.component';
import { FormDataServiceComponent } from './sections/four-services-dependency-injection/two-data-service/form-data-service/form-data-service.component';
import { ListDataServiceComponent } from './sections/four-services-dependency-injection/two-data-service/list-data-service/list-data-service.component';

//* SECTION Observables
import { FiveObservablesComponent } from './sections/five-observables/five-observables.component';
import { OneBasicObservableComponent } from './sections/five-observables/one-basic-observable/one-basic-observable.component';
import { TwoCustomObservableComponent } from './sections/five-observables/two-custom-observable/two-custom-observable.component';
import { ThreeObservableErrorsComponent } from './sections/five-observables/three-observable-errors/three-observable-errors.component';
import { FourObservableCompletionComponent } from './sections/five-observables/four-observable-completion/four-observable-completion.component';
import { FiveMapOperatorComponent } from './sections/five-observables/five-map-operator/five-map-operator.component';
import { SixFilterOperatorComponent } from './sections/five-observables/six-filter-operator/six-filter-operator.component';
import { SevenSubjectsComponent } from './sections/five-observables/seven-subjects/seven-subjects.component';
import { FirstSubjectsComponent } from './sections/five-observables/seven-subjects/first-subjects/first-subjects.component';
import { SecondSubjectsComponent } from './sections/five-observables/seven-subjects/second-subjects/second-subjects.component';

//* SECTION Forms
import { SixFormsComponent } from './sections/six-forms/six-forms.component';
import { OneTemplateDrivenFormComponent } from './sections/six-forms/one-template-driven-form/one-template-driven-form.component';
import { TwoReactiveFormComponent } from './sections/six-forms/two-reactive-form/two-reactive-form.component';

//* SECTION Data Transformation with Pipes
import { SevenPipesComponent } from './sections/seven-pipes/seven-pipes.component';
import { OneSimpleTransformationComponent } from './sections/seven-pipes/one-simple-transformation/one-simple-transformation.component';
import { TwoCustomPipeComponent } from './sections/seven-pipes/two-custom-pipe/two-custom-pipe.component';
import { ShortenPipe } from './sections/seven-pipes/two-custom-pipe/shorten.pipe';
import { ThreeFilterPipeComponent } from './sections/seven-pipes/three-filter-pipe/three-filter-pipe.component';
import { StatusFilterPipe } from './sections/seven-pipes/three-filter-pipe/status-filter.pipe';
import { FourSlugGeneratorComponent } from './sections/seven-pipes/four-slug-generator/four-slug-generator.component';
import { SymbolsToHyphensPipe } from './sections/seven-pipes/four-slug-generator/symbols-to-hyphens.pipe';

//* SECTION Http Requests
import { EightHttpRequestsComponent } from './sections/eight-http-requests/eight-http-requests.component';
import { OneGetRequestComponent } from './sections/eight-http-requests/one-get-request/one-get-request.component';
import { TwoPostRequestComponent } from './sections/eight-http-requests/two-post-request/two-post-request.component';
import { ThreeErrorHandlingComponent } from './sections/eight-http-requests/three-error-handling/three-error-handling.component';
import { FourInterceptorComponent } from './sections/eight-http-requests/four-interceptor/four-interceptor.component';
import { ToolsInterceptor } from './sections/eight-http-requests/four-interceptor/tools.interceptor';

//* SECTION Authentication & Route Protection
import { NineAuthenticationRouteProtectionComponent } from './sections/nine-authentication-route-protection/nine-authentication-route-protection.component';

//* SECTION Dynamic Components
import { TenDynamicComponentsComponent } from './sections/ten-dynamic-components/ten-dynamic-components.component';
import { OneUsingNgifComponent } from './sections/ten-dynamic-components/one-using-ngif/one-using-ngif.component';
import { TwoProgrammaticallyComponent } from './sections/ten-dynamic-components/two-programmatically/two-programmatically.component';
import { LoaderSpinnerComponent } from './sections/ten-dynamic-components/one-using-ngif/loader-spinner.component';
import { CustomAlertComponent } from './sections/ten-dynamic-components/one-using-ngif/custom-alert.component';
import { LineLoaderComponent } from './sections/ten-dynamic-components/one-using-ngif/line-loader.component';
import { ProgAlertComponent } from './sections/ten-dynamic-components/two-programmatically/prog-alert.component';
import { PlaceholderDirective } from './sections/ten-dynamic-components/two-programmatically/placeholder.directive';

//* SECTION Standalone Components - these are standalone components 
// import { ElevenStandaloneComponentsComponent } from './eleven-standalone-components/eleven-standalone-components.component';
// import { OneStandaloneComponent } from './eleven-standalone-components/one-standalone/one-standalone.component';
// import { TwoStandaloneComponent } from './eleven-standalone-components/two-standalone/two-standalone.component';

//* SECTION Signals
import { TwelveSignalsComponent } from './sections/twelve-signals/twelve-signals.component';
import { SignalComponent } from './sections/twelve-signals/signal/signal.component';

///* SECTION NGRX
import { ThirteenNgrxComponent } from './sections/thirteen-ngrx/thirteen-ngrx.component';
import { OneBasicReducerAndActionComponent } from './sections/thirteen-ngrx/one-basic-reducer-and-action/one-basic-reducer-and-action.component';
import { counterReducer } from './sections/thirteen-ngrx/one-basic-reducer-and-action/one-counter.reducer';
import { TwoBasicReducerAndActionOldMethodComponent } from './sections/thirteen-ngrx/two-basic-reducer-and-action-old-method/two-basic-reducer-and-action-old-method.component';
import { onOffReducer } from './sections/thirteen-ngrx/two-basic-reducer-and-action-old-method/onoff.reducer';
import { ThreeSelectorComponent } from './sections/thirteen-ngrx/three-selector/three-selector.component';
import { macWindowsReducer } from './sections/thirteen-ngrx/three-selector/macWindows.reducer';
import { FourEffectComponent } from './sections/thirteen-ngrx/four-effect/four-effect.component';
import { CounterEffects, fourCounterReducer } from './sections/thirteen-ngrx/four-effect/store-all-in-one';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent,

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
      
    TwoComponentsDatabindingComponent,
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
    ShortenPipe,
    ThreeFilterPipeComponent,
    StatusFilterPipe,
    EightHttpRequestsComponent,
    FourSlugGeneratorComponent,
    SymbolsToHyphensPipe,
    GreekGyroPitaOrderMakerComponent,
    OneGetRequestComponent,
    TwoPostRequestComponent,
    ThreeErrorHandlingComponent,
    FourInterceptorComponent,
    NineAuthenticationRouteProtectionComponent,
    TenDynamicComponentsComponent,
    OneUsingNgifComponent,
    TwoProgrammaticallyComponent,
    LoaderSpinnerComponent,
    CustomAlertComponent,
    LineLoaderComponent,
    ProgAlertComponent,
    PlaceholderDirective,
    FizzBuzzComponent,
    //* These are standalone components 
    // ElevenStandaloneComponentsComponent,
    // OneStandaloneComponent,
    // TwoStandaloneComponent,
    TwelveSignalsComponent,
    SignalComponent,
    ThirteenNgrxComponent,
    OneBasicReducerAndActionComponent,
    TwoBasicReducerAndActionOldMethodComponent,
    ThreeSelectorComponent,
    FourEffectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      oneCounter: counterReducer,
      onOffState: onOffReducer,
      macVSwindows: macWindowsReducer,
      fourCounter: fourCounterReducer,
    }),
    EffectsModule.forRoot([
      CounterEffects
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:ToolsInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }