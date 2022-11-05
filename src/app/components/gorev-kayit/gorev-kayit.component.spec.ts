import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorevKayitComponent } from './gorev-kayit.component';

describe('GorevKayitComponent', () => {
  let component: GorevKayitComponent;
  let fixture: ComponentFixture<GorevKayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GorevKayitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorevKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
