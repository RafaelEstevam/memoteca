import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sentenceProps } from 'src/app/interfaces/interfaces';
import { SentencesViewService } from 'src/app/pages/sentences-view/sentences-view.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() sentence = "Loren Ipsun"
  @Input() author = "Anonymous"
  @Input() model = '1'
  @Input() id = ''

  setClassCard(model: string) {
    switch (model){
      case '1':
        return 'shadow-[6px_6px_0px_#1e293b] shadow-slate-700'
      case '2':
        return 'shadow-[6px_6px_0px_#475569] shadow-red-700'
      default:
        return 'shadow-[6px_6px_0px_#94a3b8] shadow-orange-700'
    }
  }

  setClassTitle(model: string){
    switch (model){
      case '1':
        return 'text-slate-800'
      case '2':
        return 'text-red-800'
      default:
        return 'text-orange-800'
    }
  }

  deleteCard(id: number | string){
    if(window.confirm("Deseja apagar pensamento?")){
      this.service.delete(id).subscribe(() => {
        window.location.reload()
      });
    }
  }

  editCard(id: number | string){
    this.router.navigate([`/sentence/${id}`]);
  }

  constructor(
    private service: SentencesViewService,
    private router: Router
  ){

  }

  ngOnInit(): void {
  }

}
