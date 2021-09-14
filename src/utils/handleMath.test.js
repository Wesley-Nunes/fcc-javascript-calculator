import handleMath from './handleMath';

describe('handleMath', () => {
  test('If zero is the only number in value, return the input in string type', () => {
    const value = {
      current: '0',
      history: '',
    };
    const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    inputs.map((input) => {
      const result = handleMath(value, input);
      return expect(result.current).toBe(`${input}`);
    });
  });
  test('If value.current is different from zero, return the value.current with input in one string', () => {
    const value = {
      current: '20',
      history: '',
    };
    const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    inputs.map((input) => {
      const result = handleMath(value, input);
      return expect(result.current).toBe(`20${input}`);
    });
  });
  test('If input is "C", return result.current equals "0", and result.history as empty string', () => {
    const value = {
      current: '55-14',
      history: '',
    };
    const input = 'C';
    const result = handleMath(value, input);
    expect(result.current).toBe('0');
    expect(result.history).toBe('');
  });
  test('If the input is "+/-" and if the value.current is a positive number, return the value.current in negative form', () => {
    const value = {
      current: '20',
      history: '',
    };
    const input = '+/-';
    const result = handleMath(value, input);
    expect(result.current).toBe('(-20');
  });
  test('If the input is "+/-" and if the value.current is a negative number, return the value.current in positive form', () => {
    const value = {
      current: '(-42',
      history: '',
    };
    const input = '+/-';
    const result = handleMath(value, input);
    expect(result.current).toBe('42');
  });
});
