import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvsComponent } from './uvs.component';

describe('UvsComponent', () => {
  let component: UvsComponent;
  let fixture: ComponentFixture<UvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UvsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
