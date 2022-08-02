import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProdutosComponent } from './detalhe-produtos.component';

describe('DetalheProdutosComponent', () => {
  let component: DetalheProdutosComponent;
  let fixture: ComponentFixture<DetalheProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
