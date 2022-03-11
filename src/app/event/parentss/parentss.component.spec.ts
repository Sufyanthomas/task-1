import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentssComponent } from './parentss.component';

describe('ParentssComponent', () => {
  let component: ParentssComponent;
  let fixture: ComponentFixture<ParentssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
