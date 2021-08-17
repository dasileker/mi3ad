const authService = require('./auth.service');

describe('authService.default.register', () => {
  test('0', () => {
    const callFunction = () => {
      authService.default.register('array', 'something@example.com', '!Lov3MyPianoPony');
    };

    expect(callFunction).not.toThrow();
  });

  test('1', () => {
    const callFunction = () => {
      authService.default.register('object', 'bed-free@tutanota.de', '.Matrix53');
    };

    expect(callFunction).not.toThrow();
  });

  test('2', () => {
    const callFunction = () => {
      authService.default.register('array', 'bed-free@tutanota.de', '$p3onyycat');
    };

    expect(callFunction).not.toThrow();
  });

  test('3', () => {
    const callFunction = () => {
      authService.default.register('array', 'bed-free@tutanota.de', '!Lov3MyPianoPony');
    };

    expect(callFunction).not.toThrow();
  });

  test('4', () => {
    const callFunction = () => {
      authService.default.register('array', 'TestUpperCase@Example.com', '$p3onyycat');
    };

    expect(callFunction).not.toThrow();
  });

  test('5', () => {
    const callFunction = () => {
      authService.default.register(undefined, undefined, undefined);
    };

    expect(callFunction).not.toThrow();
  });
});

describe('authService.default.login', () => {
  test('0', () => {
    const callFunction = () => {
      authService.default.login('user1+user2@mycompany.com', '1Ki77y');
    };

    expect(callFunction).not.toThrow();
  });

  test('1', () => {
    const callFunction = () => {
      authService.default.login('user1+user2@mycompany.com', '!Lov3MyPianoPony');
    };

    expect(callFunction).not.toThrow();
  });

  test('2', () => {
    const callFunction = () => {
      authService.default.login('user@host:300', '!ush3r');
    };

    expect(callFunction).not.toThrow();
  });

  test('3', () => {
    const callFunction = () => {
      authService.default.login('email@Google.com', '$p3onyycat');
    };

    expect(callFunction).not.toThrow();
  });

  test('4', () => {
    const callFunction = () => {
      authService.default.login('ponicode.com', '!Lov3MyPianoPony');
    };

    expect(callFunction).not.toThrow();
  });

  test('5', () => {
    const callFunction = () => {
      authService.default.login(undefined, undefined);
    };

    expect(callFunction).not.toThrow();
  });
});
