import { isNull, isTrue, isFalse, isUndefined } from '../truthness';

describe('Teste of data Null', () => {
  it('Teste of data null', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Teste of data boolen true', () => {
  it('Teste of data true', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Teste of data boolen false', () => {
  it('Teste of data false', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('Teste of data boolen Undefined', () => {
  it('Teste of data Undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe('Teste of data boolen changed false', () => {
  it('Teste of data false', () => {
    expect(isFalse()).not.toBeTruthy();
  });
});