import { Component, ContentChild, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import { MatFormField, MatFormFieldControl } from "@angular/material/form-field";

@Component({
  selector: "form-field",
  templateUrl: "./form-field.component.html",
  styleUrls: ["./form-field.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class FormFieldComponent {
    // @ContentChild(MatFormFieldControl) _control!: MatFormFieldControl<any>;
    // @ViewChild(MatFormField) _matFormField!: MatFormField;

    // ngOnInit() {
    //     this._matFormField._control = this._control;
    // }
}
