import {
  LOGIN_UPDATA_LOGIN,
} from '../../../../src/features/login/redux/constants';

import {
  updataLogin,
  reducer,
} from '../../../../src/features/login/redux/updataLogin';

describe('login/redux/updataLogin', () => {
  it('returns correct action by updataLogin', () => {
    expect(updataLogin()).toHaveProperty('type', LOGIN_UPDATA_LOGIN);
  });

  it('handles action type LOGIN_UPDATA_LOGIN correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: LOGIN_UPDATA_LOGIN }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
