import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('test whit snapshot', () => {
  it('test request', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  it('fails test', () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20),
    }
    expect(user).toMatchSnapshot();
  });

  it('changed value in snapshot', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: 'Leo Romero'
    }
    expect(user).toMatchSnapshot({id: expect.any(Number)})
  });
});