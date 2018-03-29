let tp = require('testpass')

let steal = require('.')

tp.test('the key is deleted', (t) => {
  let obj = {foo: 1}
  steal(obj, 'foo')
  t.eq(obj.hasOwnProperty('foo'), false)
})

tp.test('the value is returned', (t) => {
  t.eq(steal({foo: 1}, 'foo'), 1)
})

tp.test('a default value can be given', (t) => {
  t.eq(steal({}, 'foo', 1), 1)
})

tp.test('prototype values are returned, but not deleted', (t) => {
  let obj = Object.create({foo: 1})
  t.eq(steal(obj, 'foo'), 1)
  t.eq(obj.foo, 1)
})
