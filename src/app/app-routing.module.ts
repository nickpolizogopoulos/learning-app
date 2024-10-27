import { NgModule } from "@angular/core";
import { 
    ExtraOptions,
    RouterModule,
    Routes
} from "@angular/router";

//* APP PAGES
import { AboutComponent } from "./pages/about.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./pages/page-not-found.component";

//* APP SECTIONS
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

//* APP PROJECTS
import { ToDoAppComponent } from "./projects/to-do-app/to-do-app.component";
import { SuperSignatureMakerComponent } from "./projects/super-signature-maker/super-signature-maker.component";
import { MyShoppingListComponent } from "./projects/my-shopping-list/my-shopping-list.component";
import { FizzBuzzComponent } from "./projects/fizz-buzz/fizz-buzz.component";
import { GreekGyroPitaOrderMakerComponent } from "./projects/greek-gyro-pita-order-maker/greek-gyro-pita-order-maker.component";
import { FourteenAnimationsComponent } from "./sections/fourteen-animations/fourteen-animations.component";

const appTitle: string = 'Learning Angular - ';

const getTitle = ( pageTitle: string ): string => {
    return appTitle + pageTitle;
};

const appRoutes: Routes = [

    //* SECTIONS -------------------------------
    {
        path: '',
        title: 'Learning Angular 2+',
        component: HomeComponent
    },
    { 
        path: 'about', 
        title: getTitle('About'), 
        component: AboutComponent 
    },
    
    { 
        path: 'the-basics',
        title: getTitle('The Basics'), 
        component: OneTheBasicsComponent 
    },
    { 
        path: 'components-databinding',
        title: getTitle('Components & Databinding'),
        component: TwoComponentsDatabindingComponent 
    },
    { 
        path: 'directives', 
        title: getTitle('Directives'),
        component: ThreeDirectivesComponent 
    },
    { 
        path: 'services', 
        title: getTitle('Services'), 
        component: FourServicesDependencyInjectionComponent 
    },
    { 
        path: 'rxjs-observables', 
        title: getTitle('Observables'),
        component: FiveObservablesComponent 
    },
    { 
        path: 'forms', 
        title: getTitle('Forms'),
        component: SixFormsComponent 
    },
    { 
        path: 'pipes', 
        title: getTitle('Pipes'),
        component: SevenPipesComponent 
    },
    { 
        path: 'http-requests',
        title: getTitle('Http Requests'),
        component: EightHttpRequestsComponent
     },
    { 
        path: 'authentication-route-protection',
        title: getTitle('Authentication'),
        component: NineAuthenticationRouteProtectionComponent 
    },
    { 
        path: 'dynamic-components', 
        title: getTitle('Dynamic Components'),
        component: TenDynamicComponentsComponent 
    },
    { 
        path: 'standalone-components', 
        title: getTitle('Standalone Components'),
        component: ElevenStandaloneComponentsComponent 
    },
    { 
        path: 'signals', 
        title: getTitle('Signals'),
        component: TwelveSignalsComponent 
    },
    { 
        path: 'ngrx', 
        title: getTitle('NgRx'),
        component: ThirteenNgrxComponent 
    },
    { 
        path: 'animations',
        title: getTitle('Animations'),
        component: FourteenAnimationsComponent 
    },
  
    //* PROJECTS -------------------------------
    { 
        path: 'project-to-do-application', 
        title: getTitle('To-Do App'),
         component: ToDoAppComponent 
    },
    { 
        path: 'project-super-signature-maker',
        title: getTitle('Super Signature Maker'),
        component: SuperSignatureMakerComponent 
    },
    { 
        path: 'project-shopping-list',
        title: getTitle('Shopping List App'),
        component: MyShoppingListComponent
    },
    { 
        path: 'project-fizzbuzz', 
        title: getTitle('FizzBuzz'),
        component: FizzBuzzComponent 
    },
    { 
        path: 'project-pita-gyro', 
        title: getTitle('Greek Pita Gyro Order Maker'),
        component: GreekGyroPitaOrderMakerComponent 
    },
    
    //* 404 -------------------------------
    { 
        path: '404', 
        title: getTitle('404'),
        component: PageNotFoundComponent 
    },

    //* WILDCARD --------------------------
    { 
        path: '**', 
        redirectTo: '404'
    }
  ];

  const extraOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled'
  }

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            extraOptions
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}