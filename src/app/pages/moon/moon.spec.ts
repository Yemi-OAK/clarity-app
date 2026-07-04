import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moon } from './moon';

describe('Moon', () => {
  let component: Moon;
  let fixture: ComponentFixture<Moon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moon],
    }).compileComponents();

    fixture = TestBed.createComponent(Moon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
