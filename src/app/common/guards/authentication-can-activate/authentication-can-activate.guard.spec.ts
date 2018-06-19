import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { CanActivateAuthentication } from './authentication-can-activate.guard';
import { AuthenticationService } from './authentication.service';
import { Auth0Service } from '../../common/services/auth0/auth0.service';
import { LocalstorageService } from '../../common/services/localstorage/localstorage.service';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpModule, HttpClientModule ],
      providers: [ AuthenticationService, CanActivateAuthentication, LocalstorageService, Auth0Service ]
    });
  });

  it('should ...', inject([CanActivateAuthentication], (guard: CanActivateAuthentication) => {
    expect(guard).toBeTruthy();
  }));
});
