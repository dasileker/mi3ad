const message = require('./message');

describe('message.setMessage', () => {
  test('0', () => {
    const callFunction = () => {
      message.setMessage(429);
    };

    expect(callFunction).not.toThrow();
  });

  test('1', () => {
    const callFunction = () => {
      message.setMessage(200);
    };

    expect(callFunction).not.toThrow();
  });

  test('2', () => {
    const callFunction = () => {
      message.setMessage(500);
    };

    expect(callFunction).not.toThrow();
  });

  test('3', () => {
    const callFunction = () => {
      message.setMessage(404);
    };

    expect(callFunction).not.toThrow();
  });

  test('4', () => {
    const callFunction = () => {
      message.setMessage(400);
    };

    expect(callFunction).not.toThrow();
  });

  test('5', () => {
    const callFunction = () => {
      message.setMessage(Infinity);
    };

    expect(callFunction).not.toThrow();
  });
});

describe('message.clearMessage', () => {
  test('0', () => {
    const callFunction = () => {
      message.clearMessage();
    };

    expect(callFunction).not.toThrow();
  });
});
