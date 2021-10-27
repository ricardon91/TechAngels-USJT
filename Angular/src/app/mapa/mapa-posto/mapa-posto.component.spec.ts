import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaPostoComponent } from './mapa-posto.component';

describe('MapaPostoComponent', () => {
  let component: MapaPostoComponent;
  let fixture: ComponentFixture<MapaPostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaPostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaPostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
