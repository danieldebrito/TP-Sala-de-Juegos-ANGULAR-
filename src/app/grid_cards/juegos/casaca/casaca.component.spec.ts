import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasacaComponent } from './casaca.component';

describe('CasacaComponent', () => {
  let component: CasacaComponent;
  let fixture: ComponentFixture<CasacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
