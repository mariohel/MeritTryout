import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should Login and return user data as an Observable<any>', inject([UserService, HttpTestingController], (service: UserService, httpMock: HttpTestingController) => {
    const user = {name:'John Doe', username: 'username'};
    const loginResult = {success:true , message: "User LogedIn Successfully", user: user};
    

    service.login('username','password').subscribe((login:any) => {
      expect(login.success).toBe(true);
      expect(login).toEqual(loginResult);
    });

    const req = httpMock.expectOne(environment.API + 'user/login/');
    expect(req.request.method).toBe("POST");
    req.flush(loginResult);
  }));
});
