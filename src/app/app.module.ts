import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
    HTTP_INTERCEPTORS,
    provideHttpClient,
    withInterceptorsFromDi
} from '@angular/common/http'
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//* SHARED COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about.component';
import { NavbarComponent } from './shared-components/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { FooterComponent } from './shared-components/footer.component';
import { CustomButtonComponent } from './shared/custom-button.component';

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

//* SECTION NGRX
import { ThirteenNgrxComponent } from './sections/thirteen-ngrx/thirteen-ngrx.component';
import { OneBasicReducerAndActionComponent } from './sections/thirteen-ngrx/one-basic-reducer-and-action/one-basic-reducer-and-action.component';
import { counterReducer } from './sections/thirteen-ngrx/one-basic-reducer-and-action/one-counter.reducer';
import { TwoBasicReducerAndActionOldMethodComponent } from './sections/thirteen-ngrx/two-basic-reducer-and-action-old-method/two-basic-reducer-and-action-old-method.component';
import { onOffReducer } from './sections/thirteen-ngrx/two-basic-reducer-and-action-old-method/onoff.reducer';
import { ThreeSelectorComponent } from './sections/thirteen-ngrx/three-selector/three-selector.component';
import { macWindowsReducer } from './sections/thirteen-ngrx/three-selector/macWindows.reducer';
import { FourEffectComponent } from './sections/thirteen-ngrx/four-effect/four-effect.component';
import { CounterEffects, fourCounterReducer } from './sections/thirteen-ngrx/four-effect/store-all-in-one';

//* SECTION Animations
import { FourteenAnimationsComponent } from './sections/fourteen-animations/fourteen-animations.component';
import { OneBasicAnimationComponent } from './sections/fourteen-animations/one-basic-animation/one-basic-animation.component';
import { TwoVoidStateComponent } from './sections/fourteen-animations/two-void-state/two-void-state.component';

//* MODULES ================================================================================================
import { TheBasicsModule } from './modules/the-basics.module';
import { ComponentsDatabindingModule } from './modules/components-databinding.module';
import { ProjectsModule } from './modules/projects.module';
import { DirectivesModule } from './modules/directives.module';
import { ServicesDependencyInjectionModule } from './modules/services-dependency-injection.module';
import { ObservablesModule } from './modules/observables.module';

@NgModule({ 
    declarations: [

        //* SHARED COMPONENTS
        AppComponent,
        HomeComponent,
        AboutComponent,
        NavbarComponent,
        PageNotFoundComponent,
        FooterComponent,
        CustomButtonComponent,


        //* ===============================================================================
        

        //* SECTION Forms
        SixFormsComponent,
        OneTemplateDrivenFormComponent,
        TwoReactiveFormComponent,

        //* SECTION Data Transformation with Pipes
        SevenPipesComponent,
        OneSimpleTransformationComponent,
        TwoCustomPipeComponent,
        ShortenPipe,
        ThreeFilterPipeComponent,
        StatusFilterPipe,
        FourSlugGeneratorComponent,
        SymbolsToHyphensPipe,

        //* SECTION Http Requests
        EightHttpRequestsComponent,
        OneGetRequestComponent,
        TwoPostRequestComponent,
        ThreeErrorHandlingComponent,
        FourInterceptorComponent,

        //* SECTION Authentication & Route Protection
        NineAuthenticationRouteProtectionComponent,

        //* SECTION Dynamic Components
        TenDynamicComponentsComponent,
        OneUsingNgifComponent,
        TwoProgrammaticallyComponent,
        LoaderSpinnerComponent,
        CustomAlertComponent,
        LineLoaderComponent,
        ProgAlertComponent,
        PlaceholderDirective,

        //* SECTION Standalone Components - these are standalone components 
        // ElevenStandaloneComponentsComponent,
        // OneStandaloneComponent,
        // TwoStandaloneComponent,

        //* SECTION Signals
        TwelveSignalsComponent,
        SignalComponent,

        //* SECTION NGRX
        ThirteenNgrxComponent,
        OneBasicReducerAndActionComponent,
        TwoBasicReducerAndActionOldMethodComponent,
        ThreeSelectorComponent,
        FourEffectComponent,
        
        //* SECTION Animations
        FourteenAnimationsComponent,
        OneBasicAnimationComponent,
        TwoVoidStateComponent


        //* ===============================================================================
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        //* MODULES
        TheBasicsModule,
        ComponentsDatabindingModule,
        ProjectsModule,
        DirectivesModule,
        ServicesDependencyInjectionModule,
        ObservablesModule,
        //* MODULES
        
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
            useClass: ToolsInterceptor,
            multi: true
        },
        provideHttpClient(
            withInterceptorsFromDi()
        )
    ] 
})
export class AppModule {}