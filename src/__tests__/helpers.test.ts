import {createGridHelper, createOrdHelper} from '../helpers';

describe('Should test helper functions', () => {
  test('Create grid helper without params', () => {
    const grid = createGridHelper();
    expect(grid.type).toEqual('GridHelper');
  });

  test('Create grid helper with 1 division', () => {
    const grid = createGridHelper({size: 10, divisions: 1});
    const segmentsCount = grid.geometry.attributes.position.count;
    expect(segmentsCount).toEqual(8);
  });

  test('Create grid helper with 2 divisions', () => {
    const grid = createGridHelper({size: 10, divisions: 2});
    const segmentsCount = grid.geometry.attributes.position.count;
    expect(segmentsCount).toEqual(12);
  });

  test('Create ord helper', () => {
    const ordHelper = createOrdHelper();
    expect(ordHelper.type).toEqual('AxesHelper');
  })
})
