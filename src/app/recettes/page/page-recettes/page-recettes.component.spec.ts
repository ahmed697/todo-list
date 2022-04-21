import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecettesComponent } from './page-recettes.component';

describe('PageRecettesComponent', () => {
  let component: PageRecettesComponent;
  let fixture: ComponentFixture<PageRecettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRecettesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
