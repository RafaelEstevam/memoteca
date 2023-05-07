import { Component, OnInit } from '@angular/core';
import { sentenceProps } from 'src/app/interfaces/interfaces';
import { SentencesViewService } from './sentences-view.service';

@Component({
  selector: 'app-sentences-view',
  templateUrl: './sentences-view.component.html',
  styleUrls: ['./sentences-view.component.css']
})
export class SentencesViewComponent implements OnInit {

  sentences: sentenceProps[] = [];

  constructor(private service: SentencesViewService) {
  }

  refreshPage() {
    this.service.list().subscribe((sentences) => {
      this.sentences = sentences
    })
  }

  ngOnInit(): void {
    this.refreshPage()
  }

}
