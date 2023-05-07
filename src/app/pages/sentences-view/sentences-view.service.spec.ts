import { TestBed } from '@angular/core/testing';

import { SentencesViewService } from './sentences-view.service';

describe('SentencesViewService', () => {
  let service: SentencesViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentencesViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
