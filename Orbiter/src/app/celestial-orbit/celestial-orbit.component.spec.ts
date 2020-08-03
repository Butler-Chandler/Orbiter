import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelestialOrbitComponent } from './celestial-orbit.component';

describe('CelestialOrbitComponent', () => {
  let component: CelestialOrbitComponent;
  let fixture: ComponentFixture<CelestialOrbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelestialOrbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelestialOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
