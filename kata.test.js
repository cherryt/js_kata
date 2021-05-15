const kata = require('./kata');

test('first kata test', () => {
  expect(kata()).toBe("some text");
});