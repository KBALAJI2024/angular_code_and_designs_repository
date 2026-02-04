import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCodeComponent } from './practice-code.component';

describe('PracticeCodeComponent', () => {
  let component: PracticeCodeComponent;
  let fixture: ComponentFixture<PracticeCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeCodeComponent]
    });
    fixture = TestBed.createComponent(PracticeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
