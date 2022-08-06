import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  
  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit(): void {
    this.stocks =[
      new Stock('VIX', 'VXX', 23.06, 6.02, 1.42),
      new Stock('20 Years Treasures', 'TLT', 23.06, 6.02, 1.42),
      new Stock('Nasdaq', 'qqq', 23.06, 6.02, 1.42),
      new Stock('Bitcoin', 'BTC', 23.06, 6.02, 1.42),
      new Stock('High Yield Bond', 'HYG', 23.06, 6.02, 1.42),
      new Stock('Nasdaq', 'qqq', 23.06, 6.02, 1.42),
      new Stock('Bitcoin', 'BTC', 23.06, 6.02, 1.42),
      new Stock('High Yield Bond', 'HYG', 23.06, 6.02, 1.42)
    ]
  }

}
