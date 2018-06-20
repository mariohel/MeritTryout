import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { CanActivateAuthentication } from './authentication-can-activate.guard';
import { UserService } from '../../services/user/user.service';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpModule, HttpClientModule ],
      providers: [ UserService, CanActivateAuthentication ]
    });
  });

  it('should ...', inject([CanActivateAuthentication], (guard: CanActivateAuthentication) => {
    expect(guard).toBeTruthy();
  }));
});
