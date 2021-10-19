import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntarioListaComponent } from './voluntario-lista.component';

describe('VoluntarioListaComponent', () => {
  let component: VoluntarioListaComponent;
  let fixture: ComponentFixture<VoluntarioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoluntarioListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
