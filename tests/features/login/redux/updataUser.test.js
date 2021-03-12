import {
  LOGIN_UPDATA_USER,
} from '../../../../src/features/login/redux/constants';

import {
  updataUser,
  reducer,
} from '../../../../src/features/login/redux/updataUser';

describe('login/redux/updataUser', () => {
  it('returns correct action by updataUser', () => {
    expect(updataUser()).toHaveProperty('type', LOGIN_UPDATA_USER);
  });

  it('handles action type LOGIN_UPDATA_USER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: LOGIN_UPDATA_USER }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
