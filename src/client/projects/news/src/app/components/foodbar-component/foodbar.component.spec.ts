import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodbarComponent } from './foodbar.component';

describe('FoodbarComponent', () => {
  let component: FoodbarComponent;
  let fixture: ComponentFixture<FoodbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodbarComponent]
    });
    fixture = TestBed.createComponent(FoodbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
