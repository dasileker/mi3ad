const authHeader = require('./auth-header');

describe('authHeader.default', () => {
  test('0', () => {
    const callFunction = () => {
      authHeader.default();
    };

    expect(callFunction).not.toThrow();
  });
});
