import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() sentence = ""
  @Input() autor = ""
  @Input() type = 1

  constructor() {
  }

  ngOnInit(): void {
  }

}
