import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//APP PAGES
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

//APP SECTIONS
import { OneTheBasicsComponent } from "./one-the-basics/one-the-basics.component";
import { TwoComponentsDatabindingComponent } from "./two-components-databinding/two-components-databinding.component";
import { ThreeDirectivesComponent } from "./three-directives/three-directives.component";
import { FourServicesDependencyInjectionComponent } from "./four-services-dependency-injection/four-services-dependency-injection.component";
import { FiveObservablesComponent } from "./five-observables/five-observables.component";
import { SixFormsComponent } from "./six-forms/six-forms.component";
import { SevenPipesComponent } from "./seven-pipes/seven-pipes.component";
import { EightHttpRequestsComponent } from "./eight-http-requests/eight-http-requests.component";
import { NineAuthenticationRouteProtectionComponent } from "./nine-authentication-route-protection/nine-authentication-route-protection.component";
import { TenDynamicComponentsComponent } from "./ten-dynamic-components/ten-dynamic-components.component";
import { ElevenStandaloneComponentsComponent } from "./eleven-standalone-components/eleven-standalone-components.component";

//APP PROJECTS
import { ToDoAppComponent } from "./projects/to-do-app/to-do-app.component";
import { SuperSignatureMakerComponent } from "./projects/super-signature-maker/super-signature-maker.component";
import { MyShoppingListComponent } from "./projects/my-shopping-list/my-shopping-list.component";
import { FizzBuzzComponent } from "./projects/fizz-buzz/fizz-buzz.component";
import { GreekGyroPitaOrderMakerComponent } from "./projects/greek-gyro-pita-order-maker/greek-gyro-pita-order-maker.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    
    { path: 'the-basics', component: OneTheBasicsComponent },
    { path: 'components-databinding', component: TwoComponentsDatabindingComponent },
    { path: 'directives', component: ThreeDirectivesComponent },
    { path: 'services', component: FourServicesDependencyInjectionComponent },
    { path: 'observables', component: FiveObservablesComponent },
    { path: 'forms', component: SixFormsComponent },
    { path: 'pipes', component: SevenPipesComponent },
    { path: 'http-requests', component: EightHttpRequestsComponent },
    { path: 'authentication-route-protection', component: NineAuthenticationRouteProtectionComponent },
    { path: 'dynamic-components', component: TenDynamicComponentsComponent },
    { path: 'standalone-components', component: ElevenStandaloneComponentsComponent },
  
    { path: 'project-to-do-application', component: ToDoAppComponent },
    { path: 'project-super-signature-maker', component: SuperSignatureMakerComponent },
    { path: 'project-shopping-list', component: MyShoppingListComponent },
    { path: 'project-fizzbuzz', component: FizzBuzzComponent },
    { path: 'project-pita-gyro', component: GreekGyroPitaOrderMakerComponent },
    
    { path: '**', redirectTo: '404'},
    { path: '404', component: PageNotFoundComponent },
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}