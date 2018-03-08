<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpageComponent } from './headerpage.component';

describe('HeaderpageComponent', () => {
  let component: HeaderpageComponent;
  let fixture: ComponentFixture<HeaderpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpageComponent } from './headerpage.component';

describe('HeaderpageComponent', () => {
  let component: HeaderpageComponent;
  let fixture: ComponentFixture<HeaderpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> e98b792efd54c336f69b5b9d99e681fd80c0d121
