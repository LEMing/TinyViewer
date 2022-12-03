import {waitFor} from '@testing-library/react';
import {loadGLB} from '../loaders';

describe('Loaders utils', function () {
  test('Should load a 3d model object', async () => {
    expect(loadGLB).toBeDefined();
  });

  test('Should reject the promise with complaining to Request module', async () => {
    let answer;
    await waitFor(() => {
      loadGLB('test-path').catch(reason => {
        answer = reason;
      });
    })
    expect(answer).toEqual('Request is not defined')
  })
});
