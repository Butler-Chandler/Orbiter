import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitFormComponent } from './orbit-form.component';

describe('OrbitFormComponent', () => {
  let component: OrbitFormComponent;
  let fixture: ComponentFixture<OrbitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
