<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmenubarComponent } from './topmenubar.component';

describe('TopmenubarComponent', () => {
  let component: TopmenubarComponent;
  let fixture: ComponentFixture<TopmenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopmenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmenubarComponent } from './topmenubar.component';

describe('TopmenubarComponent', () => {
  let component: TopmenubarComponent;
  let fixture: ComponentFixture<TopmenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopmenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> e98b792efd54c336f69b5b9d99e681fd80c0d121
