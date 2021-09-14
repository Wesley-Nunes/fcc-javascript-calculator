import handleMath from './handleMath';

describe('handleMath', () => {
  const values = {
    current: '42',
    history: '',
  };

  test('If zero is the only number in localValue.current, return the input in string type', () => {
    const localValue = {
      current: '0',
      history: '',
    };
    const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    inputs.map((input) => {
      const result = handleMath(localValue, input);
      return expect(result.current).toBe(`${input}`);
    });
  });
  test('If values.current is different from zero, return the values.current with input in one string', () => {
    const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    inputs.map((input) => {
      const result = handleMath(values, input);
      return expect(result.current).toBe(`42${input}`);
    });
  });
  test('If input is "C", return values.current equals "0", and values.history as empty string', () => {
    const input = 'C';
    const result = handleMath(values, input);
    expect(result.current).toBe('0');
    expect(result.history).toBe('');
  });
  test('If the input is "+/-" and if the values.current is a positive number, return the values.current in negative form', () => {
    const input = '+/-';
    const result = handleMath(values, input);
    expect(result.current).toBe('(-42');
  });
  test('If the input is "+/-" and if the values.current is a negative number, return the values.current in positive form', () => {
    const localValue = {
      current: '(-42',
      history: '',
    };
    const input = '+/-';
    const result = handleMath(localValue, input);
    expect(result.current).toBe('42');
  });
});
