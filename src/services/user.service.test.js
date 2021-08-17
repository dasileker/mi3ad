const user_service = require("./user.service")

describe("user_service.default.getDoctors", () => {
  test("0", () => {
    let callFunction = () => {
      user_service.default.getDoctors()
    }

    expect(callFunction).not.toThrow()
  })
})

describe("user_service.default.getDoctor", () => {
  test("0", () => {
    let callFunction = () => {
      user_service.default.getDoctor("myDIV")
    }

    expect(callFunction).not.toThrow()
  })

  test("1", () => {
    let callFunction = () => {
      user_service.default.getDoctor(undefined)
    }

    expect(callFunction).not.toThrow()
  })
})

describe("user_service.default.getAppointments", () => {
  test("0", () => {
    let callFunction = () => {
      user_service.default.getAppointments("myDIV")
    }

    expect(callFunction).not.toThrow()
  })

  test("1", () => {
    let callFunction = () => {
      user_service.default.getAppointments(undefined)
    }

    expect(callFunction).not.toThrow()
  })
})

describe("user_service.default.getAppointment", () => {
  test("0", () => {
    let callFunction = () => {
      user_service.default.getAppointment("user123", true)
    }

    expect(callFunction).not.toThrow()
  })

  test("1", () => {
    let callFunction = () => {
      user_service.default.getAppointment("user123", false)
    }

    expect(callFunction).not.toThrow()
  })

  test("2", () => {
    let callFunction = () => {
      user_service.default.getAppointment("user-name", false)
    }

    expect(callFunction).not.toThrow()
  })

  test("3", () => {
    let callFunction = () => {
      user_service.default.getAppointment("user-name", true)
    }

    expect(callFunction).not.toThrow()
  })

  test("4", () => {
    let callFunction = () => {
      user_service.default.getAppointment(123, false)
    }

    expect(callFunction).not.toThrow()
  })

  test("5", () => {
    let callFunction = () => {
      user_service.default.getAppointment(undefined, undefined)
    }

    expect(callFunction).not.toThrow()
  })

  test("6", () => {
    let callFunction = () => {
      user_service.default.getAppointment("user_name", true)
    }

    expect(callFunction).not.toThrow()
  })

  test("7", () => {
    let callFunction = () => {
      user_service.default.getAppointment("username", false)
    }

    expect(callFunction).not.toThrow()
  })

  test("8", () => {
    let callFunction = () => {
      user_service.default.getAppointment("2\\", true)
    }

    expect(callFunction).not.toThrow()
  })

  test("9", () => {
    let callFunction = () => {
      user_service.default.getAppointment("#user-name", false)
    }

    expect(callFunction).not.toThrow()
  })

  test("10", () => {
    let callFunction = () => {
      user_service.default.getAppointment(123, true)
    }

    expect(callFunction).not.toThrow()
  })

  test("11", () => {
    let callFunction = () => {
      user_service.default.getAppointment("", undefined)
    }

    expect(callFunction).not.toThrow()
  })
})

describe("user_service.default.postAppointment", () => {
  test("0", () => {
    let callFunction = () => {
      user_service.default.postAppointment("user123", true, "32-01-2020")
    }

    expect(callFunction).not.toThrow()
  })

  test("1", () => {
    let callFunction = () => {
      user_service.default.postAppointment("user-name", true, "01-01-2030")
    }

    expect(callFunction).not.toThrow()
  })

  test("2", () => {
    let callFunction = () => {
      user_service.default.postAppointment("user_name", false, "01-13-2020")
    }

    expect(callFunction).not.toThrow()
  })

  test("3", () => {
    let callFunction = () => {
      user_service.default.postAppointment(123, true, "01-01-2020")
    }

    expect(callFunction).not.toThrow()
  })

  test("4", () => {
    let callFunction = () => {
      user_service.default.postAppointment("user123", true, "01-13-2020")
    }

    expect(callFunction).not.toThrow()
  })

  test("5", () => {
    let callFunction = () => {
      user_service.default.postAppointment(undefined, undefined, undefined)
    }

    expect(callFunction).not.toThrow()
  })
})

describe("user_service.default.deleteAppointment", () => {
  test("0", () => {
    let callFunction = () => {
      user_service.default.deleteAppointment("user name", true)
    }

    expect(callFunction).not.toThrow()
  })

  test("1", () => {
    let callFunction = () => {
      user_service.default.deleteAppointment("user-name", false)
    }

    expect(callFunction).not.toThrow()
  })

  test("2", () => {
    let callFunction = () => {
      user_service.default.deleteAppointment("user_name", true)
    }

    expect(callFunction).not.toThrow()
  })

  test("3", () => {
    let callFunction = () => {
      user_service.default.deleteAppointment("user-name", true)
    }

    expect(callFunction).not.toThrow()
  })

  test("4", () => {
    let callFunction = () => {
      user_service.default.deleteAppointment(123, true)
    }

    expect(callFunction).not.toThrow()
  })

  test("5", () => {
    let callFunction = () => {
      user_service.default.deleteAppointment(undefined, undefined)
    }

    expect(callFunction).not.toThrow()
  })
})
