import tweets from './tweets';

describe('tweets reducer', () => {
  it('should return the initial state', () => {
    expect(tweets(undefined, {})).toEqual({
      data: [],
      loading: false,
    });
  });
});
