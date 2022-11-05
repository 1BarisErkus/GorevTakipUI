import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamenuComponent } from './anamenu.component';

describe('AnamenuComponent', () => {
  let component: AnamenuComponent;
  let fixture: ComponentFixture<AnamenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnamenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
