import { Component, OnInit } from '@angular/core';
import { getShortCutKeyCombo } from 'src/app/common/utils';
@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKeyPress(evt: KeyboardEvent) {
    console.log(getShortCutKeyCombo(evt))
    console.log(evt);
  }

}
