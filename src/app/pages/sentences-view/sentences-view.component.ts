import { Component, OnInit } from '@angular/core';
import { sentenceProps } from 'src/app/interfaces/interfaces';
import { SentencesViewService } from './sentences-view.service';

@Component({
  selector: 'app-sentences-view',
  templateUrl: './sentences-view.component.html',
  styleUrls: ['./sentences-view.component.css']
})
export class SentencesViewComponent implements OnInit {

  search: string = '';
  sentences: sentenceProps[] = [];
  currentPage: number = 0;
  currentLimit: number = 5;
  hasMoreSentences: boolean = true;

  constructor(private service: SentencesViewService) {
  }

  refreshPage(page: number, limit: number = 10, search = '') {
    this.service.list(page, limit, search).subscribe((sentences) => {
      this.sentences = sentences
    })
  }

  refreshCurrentPage() {
    this.service.list(++this.currentPage, this.currentLimit, this.search).subscribe((sentences) => {
      this.sentences.push(...sentences);
      if(sentences.length < this.currentLimit){
        this.hasMoreSentences = false;
      }
    })
  }

  searchSentence(){
    this.hasMoreSentences = true;
    this.currentPage = 0;
    this.currentLimit = 5;

    this.service.list(this.currentPage, this.currentLimit, this.search).subscribe((sentences) => {
      this.sentences = sentences
    })
  }

  ngOnInit(): void {
    this.refreshPage(0, this.currentLimit)
  }

}
