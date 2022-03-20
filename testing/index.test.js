const calc = require('./index');

describe('Test suites for mathematical operations function', () => {
  it('should return 5 when passed (3, 2, "add")', () => {
    const actual = 5;
    const expected = calc(3, 2, 'add');
    expect(expected).toBe(actual);
  });

  it('should return 1 when passed (3, 2, "subtract")', () => {
    const actual = 1;
    const expected = calc(3, 2, 'subtract');
    expect(expected).toBe(actual);
  });

  it('should return 6 when passed (3, 2, "times")', () => {
    const actual = 6;
    const expected = calc(3, 2, 'times');
    expect(expected).toBe(actual);
  });

  it('should return 1.5 when passed (3, 2, "divide")', () => {
    const actual = 1.5;
    const expected = calc(3, 2, 'divide');
    expect(expected).toBe(actual);
  });

  it('should return -1 when passed (2, 3, "subtract")', () => {
    const actual = -1;
    const expected = calc(2, 3, 'subtract');
    expect(expected).toBe(actual);
  });

  it('should return 0.667 when passed (2, 3, "divide")', () => {
    const actual = 0.667;
    const expected = calc(2, 3, 'divide');
    expect(expected).toBe(actual);
  });
});
