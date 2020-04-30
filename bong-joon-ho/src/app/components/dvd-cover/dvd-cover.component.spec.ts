import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdCoverComponent } from './dvd-cover.component';

describe('DvdCoverComponent', () => {
  let component: DvdCoverComponent;
  let fixture: ComponentFixture<DvdCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
