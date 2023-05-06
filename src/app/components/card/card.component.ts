import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() sentence = "Loren Ipsun"
  @Input() autor = "Anonymous"
  @Input() type = '1'

  setClassCard(type: string) {
    switch (type){
      case '1':
        return 'shadow-[6px_6px_0px_#1e293b]'
      case '2':
        return 'shadow-[6px_6px_0px_#475569]'
      default:
        return 'shadow-[6px_6px_0px_#94a3b8]'
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
