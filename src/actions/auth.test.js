const auth = require("./auth")

describe("auth.register", () => {
  test("0", () => {
    let callFunction = () => {
      auth.register("object", "email@Google.com", "!Lov3MyPianoPony")
    }

    expect(callFunction).not.toThrow()
  })

  test("1", () => {
    let callFunction = () => {
      auth.register("number", "ponicode.com", "1Ki77y")
    }

    expect(callFunction).not.toThrow()
  })

  test("2", () => {
    let callFunction = () => {
      auth.register("array", "user@host:300", ".Matrix53")
    }

    expect(callFunction).not.toThrow()
  })

  test("3", () => {
    let callFunction = () => {
      auth.register("array", "user1+user2@mycompany.com", ".Matrix53")
    }

    expect(callFunction).not.toThrow()
  })

  test("4", () => {
    let callFunction = () => {
      auth.register("object", "bed-free@tutanota.de", "$p3onyycat")
    }

    expect(callFunction).not.toThrow()
  })

  test("5", () => {
    let callFunction = () => {
      auth.register(undefined, undefined, undefined)
    }

    expect(callFunction).not.toThrow()
  })
})

describe("auth.login", () => {
  test("0", () => {
    let callFunction = () => {
      auth.login("user1+user2@mycompany.com", "!Lov3MyPianoPony")
    }

    expect(callFunction).not.toThrow()
  })

  test("1", () => {
    let callFunction = () => {
      auth.login("something@example.com", "!ush3r")
    }

    expect(callFunction).not.toThrow()
  })

  test("2", () => {
    let callFunction = () => {
      auth.login("TestUpperCase@Example.com", "1Ki77y")
    }

    expect(callFunction).not.toThrow()
  })

  test("3", () => {
    let callFunction = () => {
      auth.login("user@host:300", ".Matrix53")
    }

    expect(callFunction).not.toThrow()
  })

  test("4", () => {
    let callFunction = () => {
      auth.login("TestUpperCase@Example.com", "$p3onyycat")
    }

    expect(callFunction).not.toThrow()
  })

  test("5", () => {
    let callFunction = () => {
      auth.login(undefined, undefined)
    }

    expect(callFunction).not.toThrow()
  })
})

describe("auth.logout", () => {
  test("0", () => {
    let callFunction = () => {
      auth.logout()
    }

    expect(callFunction).not.toThrow()
  })
})
