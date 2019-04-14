import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCallbacksComponent } from './my-callbacks.component';

describe('MyCallbacksComponent', () => {
  let component: MyCallbacksComponent;
  let fixture: ComponentFixture<MyCallbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCallbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCallbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
