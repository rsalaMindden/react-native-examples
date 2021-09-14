const isValidPassword = require('./isValidPassword');

describe('Given a function isValidPassword', () => {
  describe('When is triggered', () => {
    test('Should return a Boolean', () => {
      const response = isValidPassword();
      expect(typeof response).toBe('boolean');
    });
  });
});
