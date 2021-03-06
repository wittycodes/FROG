import pkg from '../operatorRunner';
import { object, coffeeConfig, heightConfig } from '../__fixtures__/coffee';

test('coffee', () => {
  expect(pkg(coffeeConfig, object)).toEqual({
    payload: {
      all: {
        config: {},
        data: [
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 4 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 3 },
          { trace: 'Café', x: 4 },
          { trace: 'Café', x: 2 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 3 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 2 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 2 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 3 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 2 },
          { trace: 'Café', x: 3 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 3 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 5 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 4 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 4 },
          { trace: 'Café', x: 3 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 3 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 2 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 3 },
          { trace: 'Café', x: 5 },
          { trace: 'Café', x: 2 },
          { trace: 'Café', x: 2 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 3 },
          { trace: 'Café', x: 4 },
          { trace: 'Café', x: 1 },
          { trace: 'Café', x: 4 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 3 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 },
          { trace: 'Café', x: 0 }
        ]
      }
    },
    structure: 'all'
  });
});

test('rest', () => {
  expect(pkg(heightConfig, object)).toEqual({
    payload: {
      all: {
        config: {},
        data: [
          { trace: 'height', x: 183, y: 'masculin' },
          { trace: 'height', x: 180, y: 'féminin' },
          { trace: 'height', x: 165, y: 'féminin' },
          { trace: 'height', x: 188, y: 'masculin' },
          { trace: 'height', x: 190, y: 'masculin' },
          { trace: 'height', x: 169, y: 'féminin' },
          { trace: 'height', x: 182, y: 'masculin' },
          { trace: 'height', x: 190, y: 'masculin' },
          { trace: 'height', x: 174, y: 'féminin' },
          { trace: 'height', x: 175, y: 'masculin' },
          { trace: 'height', x: 162, y: 'féminin' },
          { trace: 'height', x: 182, y: 'masculin' },
          { trace: 'height', x: 192, y: 'masculin' },
          { trace: 'height', x: 182, y: 'masculin' },
          { trace: 'height', x: 168, y: 'féminin' },
          { trace: 'height', x: 0, y: null },
          { trace: 'height', x: 170, y: 'féminin' },
          { trace: 'height', x: 0, y: 'féminin' },
          { trace: 'height', x: 157, y: 'féminin' },
          { trace: 'height', x: 67, y: 'féminin' },
          { trace: 'height', x: 188, y: 'masculin' },
          { trace: 'height', x: 177, y: 'masculin' },
          { trace: 'height', x: 174, y: 'féminin' },
          { trace: 'height', x: 195, y: 'masculin' },
          { trace: 'height', x: 173, y: 'féminin' },
          { trace: 'height', x: 187, y: 'masculin' },
          { trace: 'height', x: 176, y: 'masculin' },
          { trace: 'height', x: 185, y: 'masculin' },
          { trace: 'height', x: 181, y: 'masculin' },
          { trace: 'height', x: 185, y: 'masculin' },
          { trace: 'height', x: 165, y: 'féminin' },
          { trace: 'height', x: 180, y: null },
          { trace: 'height', x: 170, y: 'féminin' },
          { trace: 'height', x: 189, y: 'masculin' },
          { trace: 'height', x: 166, y: 'féminin' },
          { trace: 'height', x: 0, y: 'masculin' },
          { trace: 'height', x: 188, y: 'masculin' },
          { trace: 'height', x: 165, y: 'féminin' },
          { trace: 'height', x: 173, y: 'féminin' },
          { trace: 'height', x: 163, y: 'féminin' },
          { trace: 'height', x: 181, y: 'masculin' },
          { trace: 'height', x: 194, y: 'masculin' },
          { trace: 'height', x: 188, y: 'masculin' },
          { trace: 'height', x: 175, y: 'masculin' },
          { trace: 'height', x: 190, y: 'masculin' },
          { trace: 'height', x: 197, y: 'masculin' },
          { trace: 'height', x: 182, y: 'masculin' },
          { trace: 'height', x: 182, y: 'masculin' },
          { trace: 'height', x: 173, y: 'masculin' },
          { trace: 'height', x: 171, y: 'masculin' },
          { trace: 'height', x: 180, y: 'masculin' },
          { trace: 'height', x: 178, y: 'masculin' },
          { trace: 'height', x: 171, y: 'masculin' },
          { trace: 'height', x: 187, y: 'masculin' },
          { trace: 'height', x: 170, y: 'masculin' },
          { trace: 'height', x: 175, y: 'féminin' },
          { trace: 'height', x: 178, y: 'masculin' },
          { trace: 'height', x: 155, y: 'féminin' },
          { trace: 'height', x: 179, y: 'masculin' },
          { trace: 'height', x: 180, y: 'masculin' },
          { trace: 'height', x: 177, y: 'masculin' },
          { trace: 'height', x: 185, y: 'masculin' },
          { trace: 'height', x: 168, y: 'féminin' },
          { trace: 'height', x: 174, y: 'masculin' },
          { trace: 'height', x: 178, y: 'masculin' },
          { trace: 'height', x: 178, y: 'masculin' },
          { trace: 'height', x: 179, y: 'masculin' },
          { trace: 'height', x: 174, y: 'féminin' },
          { trace: 'height', x: 183, y: 'masculin' },
          { trace: 'height', x: 185, y: 'masculin' },
          { trace: 'height', x: 165, y: 'féminin' },
          { trace: 'height', x: 186, y: 'masculin' },
          { trace: 'height', x: 175, y: 'masculin' },
          { trace: 'height', x: 165, y: 'féminin' },
          { trace: 'height', x: 159, y: 'féminin' },
          { trace: 'height', x: 185, y: 'masculin' },
          { trace: 'height', x: 163, y: 'féminin' },
          { trace: 'height', x: 183, y: 'masculin' },
          { trace: 'height', x: 165, y: 'féminin' },
          { trace: 'height', x: 165, y: 'masculin' },
          { trace: 'height', x: 184, y: 'masculin' },
          { trace: 'height', x: 188, y: 'masculin' },
          { trace: 'height', x: 180, y: 'masculin' },
          { trace: 'height', x: 160, y: 'féminin' },
          { trace: 'height', x: 172, y: 'masculin' },
          { trace: 'height', x: 170, y: 'féminin' },
          { trace: 'height', x: 165, y: 'féminin' },
          { trace: 'height', x: 175, y: 'masculin' },
          { trace: 'height', x: 173, y: 'féminin' }
        ]
      }
    },
    structure: 'all'
  });
});
