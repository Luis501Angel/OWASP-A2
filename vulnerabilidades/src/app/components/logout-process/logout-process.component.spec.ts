import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutProcessComponent } from './logout-process.component';

describe('LogoutProcessComponent', () => {
  let component: LogoutProcessComponent;
  let fixture: ComponentFixture<LogoutProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
