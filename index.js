
function steal(obj, key) {
  let val = obj[key]
  delete obj[key]

  if (val === undefined)
    return arguments[2]
  return val
}

module.exports = steal
