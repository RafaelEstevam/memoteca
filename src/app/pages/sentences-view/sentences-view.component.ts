import { Component, OnInit } from '@angular/core';

interface sentenceProps {
  author: string,
  sentence: string,
  type: '1' | '2' | '3'
}

@Component({
  selector: 'app-sentences-view',
  templateUrl: './sentences-view.component.html',
  styleUrls: ['./sentences-view.component.css']
})
export class SentencesViewComponent implements OnInit {

  sentences: sentenceProps[] = [];

  constructor() {
    this.sentences = [
      {type: '1', sentence: 'Loren ipsun', author: 'Anonymous'},
      {type: '1', sentence: 'Loren ipsun', author: 'Anonymous'},
      {type: '2', sentence: 'Loren ipsun', author: 'Anonymous'},
      {type: '1', sentence: 'Loren ipsun', author: 'Anonymous'},
      {type: '3', sentence: 'Loren ipsun', author: 'Anonymous'}
    ]
  }

  ngOnInit(): void {
  }

}
