import { Component } from '@angular/core';

import { DrinkService } from './drink/drink.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to my site!';

  constructor(private drinkService: DrinkService) {}

  ngOnInit() {}

  getDrink(drinkInput: String): void {
    this.drinkService.getDrink(drinkInput).subscribe(drinks => console.log(drinks));
  }
}
