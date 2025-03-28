import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploginComponent } from './emplogin.component';

describe('EmploginComponent', () => {
  let component: EmploginComponent;
  let fixture: ComponentFixture<EmploginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmploginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
