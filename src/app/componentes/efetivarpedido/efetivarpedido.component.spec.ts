import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetivarpedidoComponent } from './efetivarpedido.component';

describe('EfetivarpedidoComponent', () => {
  let component: EfetivarpedidoComponent;
  let fixture: ComponentFixture<EfetivarpedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EfetivarpedidoComponent]
    });
    fixture = TestBed.createComponent(EfetivarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
