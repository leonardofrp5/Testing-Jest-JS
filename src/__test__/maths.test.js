import { sumar, restar, multiplicar, dividir } from '../maths';

describe('mathematical calculations', () => {
  it('Teste plus', () => {
    expect(sumar(1,2)).toBe(3);
  });

  it('Tets Less', () => {
    expect(restar(2,2)).toBe(0);
  })

  it('Teste multiply', () => {
    expect(multiplicar(5,5)).toBe(25);
  });

  it('Teste divide', () => {
    expect(dividir(9,3)).toBe(3);
  });
});

