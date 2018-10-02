import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tugas03Component } from './tugas03.component';

describe('Tugas03Component', () => {
  let component: Tugas03Component;
  let fixture: ComponentFixture<Tugas03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tugas03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tugas03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
