import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaVoluntarioComponent } from './mapa-voluntario.component';

describe('MapaVoluntarioComponent', () => {
  let component: MapaVoluntarioComponent;
  let fixture: ComponentFixture<MapaVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaVoluntarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
