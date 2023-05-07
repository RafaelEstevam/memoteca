import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenceViewComponent } from './pages/sentence-view/sentence-view.component';
import { SentencesViewComponent } from './pages/sentences-view/sentences-view.component';

const routes: Routes = [
  {path: '', component: SentencesViewComponent},
  {path: 'sentence', component: SentenceViewComponent},
  {path: 'sentence/:id', component: SentenceViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
