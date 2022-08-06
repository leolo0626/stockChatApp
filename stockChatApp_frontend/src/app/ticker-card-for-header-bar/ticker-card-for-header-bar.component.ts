import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-ticker-card-for-header-bar',
  templateUrl: './ticker-card-for-header-bar.component.html',
  styleUrls: ['./ticker-card-for-header-bar.component.css']
})
export class TickerCardForHeaderBarComponent implements OnInit {

  @Input() public stock: Stock;
  constructor() { }

  ngOnInit(): void {
  }

}
