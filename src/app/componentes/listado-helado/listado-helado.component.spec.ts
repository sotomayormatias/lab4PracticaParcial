import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHeladoComponent } from './listado-helado.component';

describe('ListadoHeladoComponent', () => {
  let component: ListadoHeladoComponent;
  let fixture: ComponentFixture<ListadoHeladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoHeladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
