import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteurCardComponent } from './producteur-card.component';

describe('ProducteurCardComponent', () => {
  let component: ProducteurCardComponent;
  let fixture: ComponentFixture<ProducteurCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducteurCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducteurCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
