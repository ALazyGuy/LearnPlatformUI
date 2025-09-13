import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticBlockComponent } from './static-block-component';

describe('StaticBlockComponent', () => {
  let component: StaticBlockComponent;
  let fixture: ComponentFixture<StaticBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
