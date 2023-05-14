import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { sentenceProps } from 'src/app/interfaces/interfaces';
import { SentencesViewService } from 'src/app/pages/sentences-view/sentences-view.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formData!: FormGroup; 

  handleSubmit($e:any) {
    $e.preventDefault;
    if(this.formData.valid){
      if(!this.formData.value.id){
        this.service.create(this.formData.value).subscribe(() => {
          this.router.navigate(['/']);
        });
      }else{
        this.service.update(this.formData.value, this.formData.value.id).subscribe(() => {
          this.router.navigate(['/']);
        })
      }
    }
  }

  handleClear(){
    this.router.navigate(['/']);
  }

  constructor(
    private service: SentencesViewService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    const id = this.activateRouter.snapshot.params['id'];
    if(id){
      this.service.get(id).subscribe((sentence) => {
        this.formData = this.formBuilder.group({
          sentence: sentence.sentence,
          author: sentence.author,
          model: sentence.model,
          id: sentence.id
        });
      });
    }
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      sentence: ['Loren Ipsum', Validators.compose([
        Validators.required,
        Validators.minLength(30)
      ])],
      author: ['Anonymous', [Validators.required]],
      model: ['1', [Validators.required]]
    })
  }

  enableButton() {
    if(!this.formData.valid){
      return 'bg-slate-300'
    }else{
      return 'bg-slate-800'
    }
  }

}
