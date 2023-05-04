import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = {
    id: '1',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sapien condimentum, commodo risus ac, ullamcorper enim. Vestibulum interdum mauris',
    author: 'Anonymous',
    model: '1'
  }

  handleSubmit($e:any) {
    $e.preventDefault;
    console.log(this.form);
    console.log("clicou no botão")
  }

  handleClear(){
    this.form = {
      id: '1',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sapien condimentum, commodo risus ac, ullamcorper enim. Vestibulum interdum mauris',
      author: 'Anonymous',
      model: '1'
    }
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
