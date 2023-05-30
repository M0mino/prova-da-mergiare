import { TestBed } from '@angular/core/testing';

import { EmployeersService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
