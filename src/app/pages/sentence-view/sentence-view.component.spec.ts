import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceViewComponent } from './sentence-view.component';

describe('SentenceViewComponent', () => {
  let component: SentenceViewComponent;
  let fixture: ComponentFixture<SentenceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentenceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
