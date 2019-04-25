import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetailPage } from './home-detail.page';

describe('HomeDetailPage', () => {
  let component: HomeDetailPage;
  let fixture: ComponentFixture<HomeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
