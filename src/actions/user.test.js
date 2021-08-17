const user = require("./user")

describe("user.default", () => {
  test("0", () => {
    let callFunction = () => {
      user.default()
    }

    expect(callFunction).not.toThrow()
  })
})
