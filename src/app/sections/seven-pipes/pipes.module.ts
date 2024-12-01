import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FourSlugGeneratorComponent } from "./four-slug-generator/four-slug-generator.component";
import { SymbolsToHyphensPipe } from "./four-slug-generator/symbols-to-hyphens.pipe";
import { OneSimpleTransformationComponent } from "./one-simple-transformation/one-simple-transformation.component";
import { SevenPipesComponent } from "./seven-pipes.component";
import { StatusFilterPipe } from "./three-filter-pipe/status-filter.pipe";
import { ThreeFilterPipeComponent } from "./three-filter-pipe/three-filter-pipe.component";
import { ShortenPipe } from "./two-custom-pipe/shorten.pipe";
import { TwoCustomPipeComponent } from "./two-custom-pipe/two-custom-pipe.component";

@NgModule({
    declarations: [
        SevenPipesComponent,
        OneSimpleTransformationComponent,
        TwoCustomPipeComponent,
        ShortenPipe,
        ThreeFilterPipeComponent,
        StatusFilterPipe,
        FourSlugGeneratorComponent,
        SymbolsToHyphensPipe,
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class PipesModule {}