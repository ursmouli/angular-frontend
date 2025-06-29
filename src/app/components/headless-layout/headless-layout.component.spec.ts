import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlessLayoutComponent } from './headless-layout.component';

describe('HeadlessLayoutComponent', () => {
  let component: HeadlessLayoutComponent;
  let fixture: ComponentFixture<HeadlessLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadlessLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlessLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
