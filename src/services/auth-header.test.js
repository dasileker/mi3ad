const auth_header = require("./auth-header")

describe("auth_header.default", () => {
  test("0", () => {
    let callFunction = () => {
      auth_header.default()
    }

    expect(callFunction).not.toThrow()
  })
})
