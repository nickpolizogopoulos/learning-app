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

//APP PROJECTS
import { ToDoAppComponent } from "./projects/to-do-app/to-do-app.component";
import { SuperSignatureMakerComponent } from "./projects/super-signature-maker/super-signature-maker.component";
import { MyShoppingListComponent } from "./projects/my-shopping-list/my-shopping-list.component";
import { CalculatorComponent } from "./projects/calculator/calculator.component";
import { GreekSouvlakiPosComponent } from "./projects/greek-souvlaki-pos/greek-souvlaki-pos.component";

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
  
    { path: 'project-to-do-application', component: ToDoAppComponent },
    { path: 'project-super-signature-maker', component: SuperSignatureMakerComponent },
    { path: 'project-shopping-list', component: MyShoppingListComponent },
    { path: 'project-calculator', component: CalculatorComponent },
    { path: 'project-pos', component: GreekSouvlakiPosComponent },
    
    { path: '**', redirectTo: '404'},
    { path: '404', component: PageNotFoundComponent },
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}