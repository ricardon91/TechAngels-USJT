import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntarioInserirComponent } from './voluntario-inserir.component';

describe('VoluntarioInserirComponent', () => {
  let component: VoluntarioInserirComponent;
  let fixture: ComponentFixture<VoluntarioInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoluntarioInserirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntarioInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
