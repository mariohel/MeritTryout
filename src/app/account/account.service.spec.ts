import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from '../../environments/environment';
import { AccountService } from './account.service';


describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });
  });

  it('should be created', inject([AccountService, HttpTestingController], (service: AccountService, httpMock: HttpTestingController) => {
    expect(service).toBeTruthy();
  }));

  it('should get Balance', inject([AccountService, HttpTestingController], (service: AccountService, httpMock: HttpTestingController) => {
    const balance = {balance: 100};
    

    service.getBalance('test1').subscribe((response:any) => {
      expect(response.balance).toEqual(100);
    });

    const req = httpMock.expectOne(environment.API + `account/test1/balance`);
    expect(req.request.method).toBe("GET");
    req.flush(balance);
  }));

  it('should get Transactions History', inject([AccountService, HttpTestingController], (service: AccountService, httpMock: HttpTestingController) => {
    const transactions = [{from: 'genesis_block', to:'test1', amount: 250}];
    

    service.getTransactions('test1').subscribe((response:any) => {
      expect(response).toEqual([{from: 'genesis_block', to:'test1', amount: 250}]);
    });

    const req = httpMock.expectOne(environment.API + `account/test1/transactions`);
    expect(req.request.method).toBe("GET");
    req.flush(transactions);
  }));

  it('should Transfer 50$ from test1 to test2 account', inject([AccountService, HttpTestingController], (service: AccountService, httpMock: HttpTestingController) => {
    const transferResult = [];
    const transfer = {from: 'test1', to:'test2', amount: 50};

    service.transfer(transfer).subscribe((response:any) => {
      expect(response.message).toEqual('Transfer Done Successfully');
    });

    const req = httpMock.expectOne(environment.API + `account/transfer`);
    expect(req.request.body).toEqual(transfer);
    expect(req.request.method).toBe("POST");
    req.flush({success:true , message: "Transfer Done Successfully"});
  }));

});
