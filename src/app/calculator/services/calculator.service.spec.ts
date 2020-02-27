import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should guarantee that 1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let addition = service.calculate(1, 4, CalculatorService.ADDITION);
      expect(addition).toEqual(5);
    })
  );

  it('should guarantee that 1 - 4 = -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let addition = service.calculate(1, 4, CalculatorService.SUBTRACTION);
      expect(addition).toEqual(-3);
    })
  );

  it('should guarantee that 1 / 4 = 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let addition = service.calculate(1, 4, CalculatorService.DIVISION);
      expect(addition).toEqual(0.25);
    })
  );

  it('should guarantee that 1 * 4 = 4',
    inject([CalculatorService], (service: CalculatorService) => {
      let addition = service.calculate(1, 4, CalculatorService.MULTIPLICATION);
      expect(addition).toEqual(4);
    })
  );

  it('should return 0 to a invalid operation',
    inject([CalculatorService], (service: CalculatorService) => {
      let addition = service.calculate(1, 4, '%');
      expect(addition).toEqual(0);
    })
  );
});
