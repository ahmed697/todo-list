import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilmsComponent } from './page-films.component';

describe('PageFilmsComponent', () => {
  let component: PageFilmsComponent;
  let fixture: ComponentFixture<PageFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
