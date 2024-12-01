import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';

import { ProjectsModule } from './projects/projects.module';
import { FeatureComponentsModule } from './shared/feature-components/feature-components.module';
import { AngularSectionsModule } from './sections/angular-sections.module';

@NgModule({ 
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FeatureComponentsModule,
        ProjectsModule,
        AngularSectionsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}