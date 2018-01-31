import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotgenreComponent } from './hotgenre.component';

describe('HotgenreComponent', () => {
  let component: HotgenreComponent;
  let fixture: ComponentFixture<HotgenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotgenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotgenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
