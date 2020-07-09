import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryValuesComponent } from './recovery-values.component';

describe('RecoveryValuesComponent', () => {
  let component: RecoveryValuesComponent;
  let fixture: ComponentFixture<RecoveryValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
