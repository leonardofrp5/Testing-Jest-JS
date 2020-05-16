import { getDataFromApi } from '../promises';

describe('Test promise', () => {
  it('test to API', done => {
    const api = 'https://rickandmortyapi.com/api/character/';
    getDataFromApi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });

  it('Promise resolve', () => {
    expect(Promise.resolve('Hello!')).resolves.toBe('Hello!');
  });

  it('Promise reject', () => {
    expect(Promise.reject('Error')).rejects.toBe('Error');
  });
});
