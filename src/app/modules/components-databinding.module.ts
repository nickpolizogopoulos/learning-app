import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FormComponent } from "../sections/two-components-databinding/one-passing-data-between-components/form/form.component";
import { ListComponent } from "../sections/two-components-databinding/one-passing-data-between-components/list/list.component";
import { OnePassingDataBetweenComponentsComponent } from "../sections/two-components-databinding/one-passing-data-between-components/one-passing-data-between-components.component";
import { TwoComponentsDatabindingComponent } from "../sections/two-components-databinding/two-components-databinding.component";
import { FormTwoComponent } from "../sections/two-components-databinding/two-viewchild-and-local-references/form-two/form-two.component";
import { ImportantComponent } from "../sections/two-components-databinding/two-viewchild-and-local-references/important/important.component";
import { TwoViewchildAndLocalReferencesComponent } from "../sections/two-components-databinding/two-viewchild-and-local-references/two-viewchild-and-local-references.component";
import { UnimportantComponent } from "../sections/two-components-databinding/two-viewchild-and-local-references/unimportant/unimportant.component";

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