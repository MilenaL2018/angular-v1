import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionWorkComponent } from './accordion-work.component';

describe('AccordionWorkComponent', () => {
  let component: AccordionWorkComponent;
  let fixture: ComponentFixture<AccordionWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
