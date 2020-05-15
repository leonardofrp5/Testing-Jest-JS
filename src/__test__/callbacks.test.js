import { callbacks } from '../callbacks';

describe('test for callbacks', () => {
  it('test fuction callbacks', done => {
    const callbackss = (data) => {
      expect(data).toBe('Hello javascript');
      done();
    };
    callbacks(callbackss)
  })
});