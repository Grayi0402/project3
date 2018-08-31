import { TestBed, async, inject } from '@angular/core/testing';

import { CheckedLoginGuard } from './checked-login.guard';

describe('CheckedLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckedLoginGuard]
    });
  });

  it('should ...', inject([CheckedLoginGuard], (guard: CheckedLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
