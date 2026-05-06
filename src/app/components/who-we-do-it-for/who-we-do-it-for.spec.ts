import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeDoItFor } from './who-we-do-it-for';

describe('WhoWeDoItFor', () => {
  let component: WhoWeDoItFor;
  let fixture: ComponentFixture<WhoWeDoItFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoWeDoItFor],
    }).compileComponents();

    fixture = TestBed.createComponent(WhoWeDoItFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
