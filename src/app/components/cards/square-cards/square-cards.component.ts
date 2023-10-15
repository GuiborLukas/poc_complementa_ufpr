import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-cards',
  templateUrl: './square-cards.component.html',
  styleUrls: ['./square-cards.component.css']
})
export class SquareCardsComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';

}
