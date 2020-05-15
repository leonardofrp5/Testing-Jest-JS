// After each test

afterEach(() => console.log('After each test'));
afterAll(() => console.log('After all test'));

// Before each test

beforeEach(() => console.log('Before each test'));
beforeAll(() => console.log('Before all test'));

describe('Test', () => {
  it('Example of test', () => {
    expect(true).toBeTruthy();
  });
});
