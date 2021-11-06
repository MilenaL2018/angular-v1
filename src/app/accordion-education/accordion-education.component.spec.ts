import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionEducationComponent } from './accordion-education.component';

describe('AccordionEducationComponent', () => {
  let component: AccordionEducationComponent;
  let fixture: ComponentFixture<AccordionEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
