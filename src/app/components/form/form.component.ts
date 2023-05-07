import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { sentenceProps } from 'src/app/interfaces/interfaces';
import { SentencesViewService } from 'src/app/pages/sentences-view/sentences-view.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: sentenceProps = {
    id: '',
    sentence: '',
    model: '',
    author: ''
  }

  handleSubmit($e:any) {
    $e.preventDefault;
    if(!this.form.id){
      this.service.create(this.form).subscribe(() => {
        this.router.navigate(['/']);
      });
    }else{
      this.service.update(this.form, this.form.id).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }

  handleClear(){
    this.form = {
      sentence: '',
      model: '',
      author: ''
    };

    this.router.navigate(['/']);
  }

  constructor(
    private service: SentencesViewService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {
    const id = this.activateRouter.snapshot.params['id'];
    if(id){
      this.service.get(id).subscribe((sentence) => {
        this.form = sentence;
      });
    }
  }

  ngOnInit(): void {
    
  }

}
