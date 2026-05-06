import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitmentSection } from './commitment-section';

describe('CommitmentSection', () => {
  let component: CommitmentSection;
  let fixture: ComponentFixture<CommitmentSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitmentSection],
    }).compileComponents();

    fixture = TestBed.createComponent(CommitmentSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
