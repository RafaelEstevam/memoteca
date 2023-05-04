import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesViewComponent } from './sentences-view.component';

describe('SentencesViewComponent', () => {
  let component: SentencesViewComponent;
  let fixture: ComponentFixture<SentencesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentencesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentencesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
