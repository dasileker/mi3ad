const message = require("./message")

describe("message.setMessage", () => {
  test("0", () => {
    let callFunction = () => {
      message.setMessage(429)
    }

    expect(callFunction).not.toThrow()
  })

  test("1", () => {
    let callFunction = () => {
      message.setMessage(200)
    }

    expect(callFunction).not.toThrow()
  })

  test("2", () => {
    let callFunction = () => {
      message.setMessage(500)
    }

    expect(callFunction).not.toThrow()
  })

  test("3", () => {
    let callFunction = () => {
      message.setMessage(404)
    }

    expect(callFunction).not.toThrow()
  })

  test("4", () => {
    let callFunction = () => {
      message.setMessage(400)
    }

    expect(callFunction).not.toThrow()
  })

  test("5", () => {
    let callFunction = () => {
      message.setMessage(Infinity)
    }

    expect(callFunction).not.toThrow()
  })
})

describe("message.clearMessage", () => {
  test("0", () => {
    let callFunction = () => {
      message.clearMessage()
    }

    expect(callFunction).not.toThrow()
  })
})
