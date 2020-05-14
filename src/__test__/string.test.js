import { functionName } from '../string';

describe('Testing for strings', () => {
  it('Comparation in string', () => {
    expect(functionName()).toMatch(/Leo/);
  });

  it('Comparation in string', () => {
    expect(functionName()).not.toMatch(/Andrea/);
  });

  it('length of text', () => {
    expect(functionName()).toHaveLength(28);
  });
});
