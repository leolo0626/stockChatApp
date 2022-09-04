import { Component, OnDestroy, OnInit,ViewEncapsulation, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { getShortCutKeyCombo } from 'src/app/common/utils';
import { Editor, MenuComponent, NgxEditorComponent, Toolbar, Validators } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostEditorComponent implements OnInit{

  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  ngOnInit(): void {
  }

  handleOnClick(event: any, action: string){
    switch(action) {
      case "bold":
        console.log("Bold the text")
        this.document.execCommand("bold");
        break;
      case "italic":
        this.document.execCommand("italic");
        break
      default: 
        console.log("Unrecognised Action");
    }
  }


}
