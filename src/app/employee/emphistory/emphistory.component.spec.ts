import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphistoryComponent } from './emphistory.component';

describe('EmphistoryComponent', () => {
  let component: EmphistoryComponent;
  let fixture: ComponentFixture<EmphistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmphistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmphistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
