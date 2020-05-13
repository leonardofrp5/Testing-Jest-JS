import { numbers } from '../numbers';

describe('Testes comparation numbers', () => {
  it('Tets greater than', () => {
    expect(numbers(3,2)).toBeGreaterThan(4);
  });

  it('Tets greater than or equal', () => {
    expect(numbers(3,2)).toBeGreaterThanOrEqual(4);
  });

  it('Tets less than', () => {
    expect(numbers(3,2)).toBeLessThan(10);
  });

  it('Tets less than or equal', () => {
    expect(numbers(3,2)).toBeLessThanOrEqual(5);
  });

  it('Tets number float', () => {
    expect(numbers(0.2,0.3)).toBeCloseTo(0.5);
  });
});
