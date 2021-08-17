const userService = require('./user.service');

describe('userService.default.getDoctors', () => {
  test('0', () => {
    const callFunction = () => {
      userService.default.getDoctors();
    };

    expect(callFunction).not.toThrow();
  });
});

describe('userService.default.getDoctor', () => {
  test('0', () => {
    const callFunction = () => {
      userService.default.getDoctor('myDIV');
    };

    expect(callFunction).not.toThrow();
  });

  test('1', () => {
    const callFunction = () => {
      userService.default.getDoctor(undefined);
    };

    expect(callFunction).not.toThrow();
  });
});

describe('userService.default.getAppointments', () => {
  test('0', () => {
    const callFunction = () => {
      userService.default.getAppointments('myDIV');
    };

    expect(callFunction).not.toThrow();
  });

  test('1', () => {
    const callFunction = () => {
      userService.default.getAppointments(undefined);
    };

    expect(callFunction).not.toThrow();
  });
});

describe('userService.default.getAppointment', () => {
  test('0', () => {
    const callFunction = () => {
      userService.default.getAppointment('user123', true);
    };

    expect(callFunction).not.toThrow();
  });

  test('1', () => {
    const callFunction = () => {
      userService.default.getAppointment('user123', false);
    };

    expect(callFunction).not.toThrow();
  });

  test('2', () => {
    const callFunction = () => {
      userService.default.getAppointment('user-name', false);
    };

    expect(callFunction).not.toThrow();
  });

  test('3', () => {
    const callFunction = () => {
      userService.default.getAppointment('user-name', true);
    };

    expect(callFunction).not.toThrow();
  });

  test('4', () => {
    const callFunction = () => {
      userService.default.getAppointment(123, false);
    };

    expect(callFunction).not.toThrow();
  });

  test('5', () => {
    const callFunction = () => {
      userService.default.getAppointment(undefined, undefined);
    };

    expect(callFunction).not.toThrow();
  });

  test('6', () => {
    const callFunction = () => {
      userService.default.getAppointment('user_name', true);
    };

    expect(callFunction).not.toThrow();
  });

  test('7', () => {
    const callFunction = () => {
      userService.default.getAppointment('username', false);
    };

    expect(callFunction).not.toThrow();
  });

  test('8', () => {
    const callFunction = () => {
      userService.default.getAppointment('2\\', true);
    };

    expect(callFunction).not.toThrow();
  });

  test('9', () => {
    const callFunction = () => {
      userService.default.getAppointment('#user-name', false);
    };

    expect(callFunction).not.toThrow();
  });

  test('10', () => {
    const callFunction = () => {
      userService.default.getAppointment(123, true);
    };

    expect(callFunction).not.toThrow();
  });

  test('11', () => {
    const callFunction = () => {
      userService.default.getAppointment('', undefined);
    };

    expect(callFunction).not.toThrow();
  });
});

describe('userService.default.postAppointment', () => {
  test('0', () => {
    const callFunction = () => {
      userService.default.postAppointment('user123', true, '32-01-2020');
    };

    expect(callFunction).not.toThrow();
  });

  test('1', () => {
    const callFunction = () => {
      userService.default.postAppointment('user-name', true, '01-01-2030');
    };

    expect(callFunction).not.toThrow();
  });

  test('2', () => {
    const callFunction = () => {
      userService.default.postAppointment('user_name', false, '01-13-2020');
    };

    expect(callFunction).not.toThrow();
  });

  test('3', () => {
    const callFunction = () => {
      userService.default.postAppointment(123, true, '01-01-2020');
    };

    expect(callFunction).not.toThrow();
  });

  test('4', () => {
    const callFunction = () => {
      userService.default.postAppointment('user123', true, '01-13-2020');
    };

    expect(callFunction).not.toThrow();
  });

  test('5', () => {
    const callFunction = () => {
      userService.default.postAppointment(undefined, undefined, undefined);
    };

    expect(callFunction).not.toThrow();
  });
});

describe('userService.default.deleteAppointment', () => {
  test('0', () => {
    const callFunction = () => {
      userService.default.deleteAppointment('user name', true);
    };

    expect(callFunction).not.toThrow();
  });

  test('1', () => {
    const callFunction = () => {
      userService.default.deleteAppointment('user-name', false);
    };

    expect(callFunction).not.toThrow();
  });

  test('2', () => {
    const callFunction = () => {
      userService.default.deleteAppointment('user_name', true);
    };

    expect(callFunction).not.toThrow();
  });

  test('3', () => {
    const callFunction = () => {
      userService.default.deleteAppointment('user-name', true);
    };

    expect(callFunction).not.toThrow();
  });

  test('4', () => {
    const callFunction = () => {
      userService.default.deleteAppointment(123, true);
    };

    expect(callFunction).not.toThrow();
  });

  test('5', () => {
    const callFunction = () => {
      userService.default.deleteAppointment(undefined, undefined);
    };

    expect(callFunction).not.toThrow();
  });
});
