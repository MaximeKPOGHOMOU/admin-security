import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entreprise } from './entreprise';

describe('Entreprise', () => {
  let component: Entreprise;
  let fixture: ComponentFixture<Entreprise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entreprise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entreprise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
