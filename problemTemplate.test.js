/* eslint-env mocha,chai */
const { expect } = require('chai')

const myFunction = someArguments => {
  return 'some code'
}

describe('this problem', () => {
  it('returns the right answers', () => {
    const easyTestResult = myFunction()
    expect(easyTestResult).to.equal('some code')
  })
})
