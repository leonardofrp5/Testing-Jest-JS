import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('test whit snapshot', () => {
  it('test request', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });
});