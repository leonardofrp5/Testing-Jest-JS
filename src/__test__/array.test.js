import { arrayFruits, arrayColors } from '../array';

describe('Tets with data type array', () => {
  it('Looking for Banana in fruts array', () => {
    expect(arrayFruits()).toContain('Papaya');
  });

  it('Do not have data in array', () => {
    expect(arrayFruits()).not.toContain('uvas');
  });

  it('Length array', () => {
    expect(arrayFruits()).toHaveLength(5);
  });
});
