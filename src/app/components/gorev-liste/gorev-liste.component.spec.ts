import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorevListeComponent } from './gorev-liste.component';

describe('GorevListeComponent', () => {
  let component: GorevListeComponent;
  let fixture: ComponentFixture<GorevListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GorevListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorevListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
