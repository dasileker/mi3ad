const auth_service = require("./auth.service")

describe("auth_service.default.register", () => {
  test("0", () => {
    let callFunction = () => {
      auth_service.default.register("array", "something@example.com", "!Lov3MyPianoPony")
    }

    expect(callFunction).not.toThrow()
  })

  test("1", () => {
    let callFunction = () => {
      auth_service.default.register("object", "bed-free@tutanota.de", ".Matrix53")
    }

    expect(callFunction).not.toThrow()
  })

  test("2", () => {
    let callFunction = () => {
      auth_service.default.register("array", "bed-free@tutanota.de", "$p3onyycat")
    }

    expect(callFunction).not.toThrow()
  })

  test("3", () => {
    let callFunction = () => {
      auth_service.default.register("array", "bed-free@tutanota.de", "!Lov3MyPianoPony")
    }

    expect(callFunction).not.toThrow()
  })

  test("4", () => {
    let callFunction = () => {
      auth_service.default.register("array", "TestUpperCase@Example.com", "$p3onyycat")
    }

    expect(callFunction).not.toThrow()
  })

  test("5", () => {
    let callFunction = () => {
      auth_service.default.register(undefined, undefined, undefined)
    }

    expect(callFunction).not.toThrow()
  })
})

describe("auth_service.default.login", () => {
  test("0", () => {
    let callFunction = () => {
      auth_service.default.login("user1+user2@mycompany.com", "1Ki77y")
    }

    expect(callFunction).not.toThrow()
  })

  test("1", () => {
    let callFunction = () => {
      auth_service.default.login("user1+user2@mycompany.com", "!Lov3MyPianoPony")
    }

    expect(callFunction).not.toThrow()
  })

  test("2", () => {
    let callFunction = () => {
      auth_service.default.login("user@host:300", "!ush3r")
    }

    expect(callFunction).not.toThrow()
  })

  test("3", () => {
    let callFunction = () => {
      auth_service.default.login("email@Google.com", "$p3onyycat")
    }

    expect(callFunction).not.toThrow()
  })

  test("4", () => {
    let callFunction = () => {
      auth_service.default.login("ponicode.com", "!Lov3MyPianoPony")
    }

    expect(callFunction).not.toThrow()
  })

  test("5", () => {
    let callFunction = () => {
      auth_service.default.login(undefined, undefined)
    }

    expect(callFunction).not.toThrow()
  })
})
