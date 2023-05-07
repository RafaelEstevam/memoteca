import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sentenceProps } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SentencesViewService {

  private API = 'http://localhost:3000/sentences';

  list(): Observable<sentenceProps[]>{
    return this.http.get<sentenceProps[]>(this.API);
  }

  get(id: number | string){
    const getURL = `${this.API}/${id}`;
    return this.http.get<sentenceProps>(getURL);
  }

  create(sentence: sentenceProps): Observable<sentenceProps[]>{
    return this.http.post<sentenceProps[]>(this.API, sentence);
  }

  update(sentence: sentenceProps, id: number | string){
    const editURL = `${this.API}/${id}`;
    return this.http.put<sentenceProps>(editURL, sentence);
  }

  delete(id: number | string): Observable<sentenceProps>{
    const deleteURL = `${this.API}/${id}`;
    return this.http.delete<sentenceProps>(deleteURL);
  }

  constructor(private http: HttpClient){
     
  };

}
