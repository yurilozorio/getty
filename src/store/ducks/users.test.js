import users, { Types as UsersTypes } from './users';

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(users(undefined, {})).toEqual({
      loggedUser: {},
      data: [],
      loading: false,
    });
  });

  it('should store the user upon login', () => {
    expect(
      users(
        {
          loggedUser: {},
          data: [],
          loading: false,
        },
        {
          type: UsersTypes.GET_USER,
          payload: {
            user: {
              id: 1,
              username: 'some-user',
            },
          },
        },
      ),
    ).toEqual({
      loggedUser: {
        id: 1,
        username: 'some-user',
      },
      data: [],
      loading: false,
    });
  });
});
