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
  currentPage: number = 0;
  currentLimit: number = 5;
  hasMoreSentences: boolean = true;

  constructor(private service: SentencesViewService) {
  }

  refreshPage(page: number, limit: number = 10) {
    this.service.list(page, limit).subscribe((sentences) => {
      this.sentences = sentences
    })
  }

  refreshCurrentPage() {
    this.service.list(++this.currentPage, this.currentLimit).subscribe((sentences) => {
      this.sentences.push(...sentences);
      if(sentences.length < this.currentLimit){
        this.hasMoreSentences = false;
      }
    })
  }

  ngOnInit(): void {
    this.refreshPage(0, this.currentLimit)
  }

}
