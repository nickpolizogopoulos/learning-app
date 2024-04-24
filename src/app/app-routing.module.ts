import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";

//APP PAGES
import { AboutComponent } from "./shared-components/about.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./shared-components/page-not-found.component";

//APP SECTIONS
import { OneTheBasicsComponent } from "./sections/one-the-basics/one-the-basics.component";
import { TwoComponentsDatabindingComponent } from "./sections/two-components-databinding/two-components-databinding.component";
import { ThreeDirectivesComponent } from "./sections/three-directives/three-directives.component";
import { FourServicesDependencyInjectionComponent } from "./sections/four-services-dependency-injection/four-services-dependency-injection.component";
import { FiveObservablesComponent } from "./sections/five-observables/five-observables.component";
import { SixFormsComponent } from "./sections/six-forms/six-forms.component";
import { SevenPipesComponent } from "./sections/seven-pipes/seven-pipes.component";
import { EightHttpRequestsComponent } from "./sections/eight-http-requests/eight-http-requests.component";
import { NineAuthenticationRouteProtectionComponent } from "./sections/nine-authentication-route-protection/nine-authentication-route-protection.component";
import { TenDynamicComponentsComponent } from "./sections/ten-dynamic-components/ten-dynamic-components.component";
import { ElevenStandaloneComponentsComponent } from "./sections/eleven-standalone-components/eleven-standalone-components.component";
import { TwelveSignalsComponent } from "./sections/twelve-signals/twelve-signals.component";
import { ThirteenNgrxComponent } from "./sections/thirteen-ngrx/thirteen-ngrx.component";

//APP PROJECTS
import { ToDoAppComponent } from "./projects/to-do-app/to-do-app.component";
import { SuperSignatureMakerComponent } from "./projects/super-signature-maker/super-signature-maker.component";
import { MyShoppingListComponent } from "./projects/my-shopping-list/my-shopping-list.component";
import { FizzBuzzComponent } from "./projects/fizz-buzz/fizz-buzz.component";
import { GreekGyroPitaOrderMakerComponent } from "./projects/greek-gyro-pita-order-maker/greek-gyro-pita-order-maker.component";

const appTitle:string = 'Learning Angular -';

const appRoutes: Routes = [

    //* SECTIONS -------------------------------
    {
        path: '',
        title: 'Learning Angular 2+',
        component: HomeComponent
    },
    { 
        path: 'about', 
        title: `${appTitle} About`, 
        component: AboutComponent 
    },
    
    { 
        path: 'the-basics', 
        title: `${appTitle} The Basics`, 
        component: OneTheBasicsComponent 
    },
    { 
        path: 'components-databinding', 
        title: `${appTitle} Components & Databinding`, 
        component: TwoComponentsDatabindingComponent 
    },
    { 
        path: 'directives', 
        title: `${appTitle} Directives`, 
        component: ThreeDirectivesComponent 
    },
    { 
        path: 'services', 
        title: `${appTitle} Services`, 
        component: FourServicesDependencyInjectionComponent 
    },
    { 
        path: 'observables', 
        title: `${appTitle} Observables`, 
        component: FiveObservablesComponent 
    },
    { 
        path: 'forms', 
        title: `${appTitle} Forms`, 
        component: SixFormsComponent 
    },
    { 
        path: 'pipes', 
        title: `${appTitle} Pipes`, 
        component: SevenPipesComponent 
    },
    { 
        path: 'http-requests', 
        title: `${appTitle} Http Requests`, 
        component: EightHttpRequestsComponent
     },
    { 
        path: 'authentication-route-protection', 
        title: `${appTitle} Authentication`, 
        component: NineAuthenticationRouteProtectionComponent 
    },
    { 
        path: 'dynamic-components', 
        title: `${appTitle} Dynamic Components`, 
        component: TenDynamicComponentsComponent 
    },
    { 
        path: 'standalone-components', 
        title: `${appTitle} Standalone Components`, 
        component: ElevenStandaloneComponentsComponent 
    },
    { 
        path: 'signals', 
        title: `${appTitle} Signals`, 
        component: TwelveSignalsComponent 
    },
    { 
        path: 'ngrx', 
        title: `${appTitle} NgRx`, 
        component: ThirteenNgrxComponent 
    },
  
    //* PROJECTS -------------------------------
    { 
        path: 'project-to-do-application', 
        title: `${appTitle} To-Do App`,
         component: ToDoAppComponent 
    },
    { 
        path: 'project-super-signature-maker', 
        title: `${appTitle} Super Signature Maker`,
         component: SuperSignatureMakerComponent 
    },
    { 
        path: 'project-shopping-list',
         title: `${appTitle} Shopping List App`,
          component: MyShoppingListComponent
    },
    { 
        path: 'project-fizzbuzz', 
        title: `${appTitle} FizzBuzz`, 
        component: FizzBuzzComponent 
    },
    { 
        path: 'project-pita-gyro', 
        title: `${appTitle} Greek Pita Gyro Order Maker`, 
        component: GreekGyroPitaOrderMakerComponent 
    },
    
    //* 404 -------------------------------
    { 
        path: '**', 
        redirectTo: '404'
    },
    { 
        path: '404', 
        title: `${appTitle} 404`, 
        component: PageNotFoundComponent 
    },
  ];

  const extraOptions:ExtraOptions = {
    scrollPositionRestoration: 'enabled'
  }

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, extraOptions)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}