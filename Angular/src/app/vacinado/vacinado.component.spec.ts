import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinadoComponent } from './vacinado.component';

describe('VacinadoComponent', () => {
  let component: VacinadoComponent;
  let fixture: ComponentFixture<VacinadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
