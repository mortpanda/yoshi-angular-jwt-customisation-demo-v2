import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTestWidgetComponent } from './quick-test-widget.component';

describe('QuickTestWidgetComponent', () => {
  let component: QuickTestWidgetComponent;
  let fixture: ComponentFixture<QuickTestWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickTestWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickTestWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
