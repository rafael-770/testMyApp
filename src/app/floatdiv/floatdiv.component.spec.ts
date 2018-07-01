import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatdivComponent } from './floatdiv.component';

describe('FloatdivComponent', () => {
  let component: FloatdivComponent;
  let fixture: ComponentFixture<FloatdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
