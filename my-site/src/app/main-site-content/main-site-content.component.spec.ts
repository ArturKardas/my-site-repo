import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSiteContentComponent } from './main-site-content.component';

describe('MainSiteContentComponent', () => {
  let component: MainSiteContentComponent;
  let fixture: ComponentFixture<MainSiteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSiteContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSiteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
