import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { OneTheBasicsComponent } from "./one-the-basics/one-the-basics.component";
import { TwoComponentsDatabindingComponent } from "./two-components-databinding/two-components-databinding.component";
import { ThreeDirectivesComponent } from "./three-directives/three-directives.component";
import { FourServicesDependencyInjectionComponent } from "./four-services-dependency-injection/four-services-dependency-injection.component";

import { ToDoAppComponent } from "./projects/to-do-app/to-do-app.component";
import { SuperSignatureMakerComponent } from "./projects/super-signature-maker/super-signature-maker.component";
import { MyShoppingListComponent } from "./projects/my-shopping-list/my-shopping-list.component";
import { CalculatorComponent } from "./projects/calculator/calculator.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'the-basics', component: OneTheBasicsComponent },
    { path: 'components-databinding', component: TwoComponentsDatabindingComponent },
    { path: 'directives', component: ThreeDirectivesComponent },
    { path: 'services', component: FourServicesDependencyInjectionComponent },
  
    { path: 'project-to-do-application', component: ToDoAppComponent },
    { path: 'project-super-signature-maker', component: SuperSignatureMakerComponent },
    { path: 'project-shopping-list', component: MyShoppingListComponent },
    { path: 'project-calculator', component: CalculatorComponent },
    
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