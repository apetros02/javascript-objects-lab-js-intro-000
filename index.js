var recipes = {}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}
function updateObjectWIthKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}
