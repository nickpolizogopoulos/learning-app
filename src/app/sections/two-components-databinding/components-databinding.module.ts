import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FormComponent } from "./one-passing-data-between-components/form/form.component";
import { ListComponent } from "./one-passing-data-between-components/list/list.component";
import { OnePassingDataBetweenComponentsComponent } from "./one-passing-data-between-components/one-passing-data-between-components.component";
import { TwoComponentsDatabindingComponent } from "./two-components-databinding.component";
import { FormTwoComponent } from "./two-viewchild-and-local-references/form-two/form-two.component";
import { ImportantComponent } from "./two-viewchild-and-local-references/important/important.component";
import { TwoViewchildAndLocalReferencesComponent } from "./two-viewchild-and-local-references/two-viewchild-and-local-references.component";
import { UnimportantComponent } from "./two-viewchild-and-local-references/unimportant/unimportant.component";

@NgModule({
    declarations: [
        TwoComponentsDatabindingComponent,
        OnePassingDataBetweenComponentsComponent,
        FormComponent,
        ListComponent,
        TwoViewchildAndLocalReferencesComponent,
        ImportantComponent,
        UnimportantComponent,
        FormTwoComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
})
export class ComponentsDatabindingModule {}