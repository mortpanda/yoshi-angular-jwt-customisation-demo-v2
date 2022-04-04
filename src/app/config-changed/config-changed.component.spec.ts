import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigChangedComponent } from './config-changed.component';

describe('ConfigChangedComponent', () => {
  let component: ConfigChangedComponent;
  let fixture: ComponentFixture<ConfigChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
