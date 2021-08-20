const user = require('./user');

describe('user.default', () => {
  test('0', () => {
    const callFunction = () => {
      user.default();
    };

    expect(callFunction).not.toThrow();
  });
});
