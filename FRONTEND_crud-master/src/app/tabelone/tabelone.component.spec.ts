import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabeloneComponent } from './tabelone.component';

describe('MyTableComponent', () => {
  let component: TabeloneComponent;
  let fixture: ComponentFixture<TabeloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabeloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabeloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
