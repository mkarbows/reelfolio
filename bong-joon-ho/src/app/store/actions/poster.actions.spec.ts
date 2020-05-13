import * as fromPoster from './poster.actions';

describe('loadPosters', () => {
  it('should return an action', () => {
    expect(fromPoster.loadPosters().type).toBe('[Poster] Load Posters');
  });
});
