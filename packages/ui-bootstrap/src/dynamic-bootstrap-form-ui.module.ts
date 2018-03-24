import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { TextMaskModule } from "angular2-text-mask";
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
import { DynamicBootstrapFormControlContainerComponent } from "./dynamic-bootstrap-form-control-container.component";
import { DynamicBootstrapFormComponent } from "./dynamic-bootstrap-form.component";
import { DynamicBootstrapCheckboxComponent } from "./checkbox/dynamic-bootstrap-checkbox.component";
import { DynamicBootstrapDatePickerComponent } from "./datepicker/dynamic-bootstrap-datepicker.component";
import { DynamicBootstrapInputComponent } from "./input/dynamic-bootstrap-input.component";
import { DynamicBootstrapRadioGroupComponent } from "./radio-group/dynamic-bootstrap-radio-group.component";
import { DynamicBootstrapSelectComponent } from "./select/dynamic-bootstrap-select.component";
import { DynamicBootstrapTextAreaComponent } from "./textarea/dynamic-bootstrap-textarea.component";
import { DynamicBootstrapTimePickerComponent } from "./timepicker/dynamic-bootstrap-timepicker.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        TextMaskModule,
        DynamicFormsCoreModule
    ],
    declarations: [
        DynamicBootstrapCheckboxComponent,
        DynamicBootstrapDatePickerComponent,
        DynamicBootstrapInputComponent,
        DynamicBootstrapRadioGroupComponent,
        DynamicBootstrapSelectComponent,
        DynamicBootstrapTextAreaComponent,
        DynamicBootstrapTimePickerComponent,
        DynamicBootstrapFormControlContainerComponent,
        DynamicBootstrapFormComponent
    ],
    entryComponents: [
        DynamicBootstrapCheckboxComponent,
        DynamicBootstrapDatePickerComponent,
        DynamicBootstrapInputComponent,
        DynamicBootstrapRadioGroupComponent,
        DynamicBootstrapSelectComponent,
        DynamicBootstrapTextAreaComponent,
        DynamicBootstrapTimePickerComponent
    ],
    exports: [
        DynamicFormsCoreModule,
        DynamicBootstrapFormControlContainerComponent,
        DynamicBootstrapFormComponent
    ]
})
export class DynamicFormsBootstrapUIModule {
}