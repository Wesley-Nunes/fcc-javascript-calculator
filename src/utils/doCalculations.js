function doCalculations(input) {
  const operators = '*/-+';

  /**
    * split:  Transform the expression from string to array
    * @param  {String} expression Expression in string type
    * @return {Array}             Expression in array type
    */
  function split(expression) {
    const expressionSplited = [];
    let start = 0;

    for (let i = 0; i < expression.length; i += 1) {
      if (operators.includes(expression[i])) {
        const item = expression.slice(start, i);

        expressionSplited.push(item);
        expressionSplited.push(expression[i]);
        start = i + 1;
      }
    }
    // Add the last item
    expressionSplited.push(expression.slice(start));

    // Remove empty values of the array
    return expressionSplited.filter((item) => item.length > 0);
  }

  /**
    * negativeNumbers: Place the negative operator with the negative number
    * @param  {Array} expression Expression in array type
    * @return {Array}            Expression in array type fixed
    */
  function negativeNumbers(expression) {
    const fixedExp = expression.slice();

    for (let i = 0; i < fixedExp.length; i += 1) {
      const isNegativeAndAnOperatorFollows = fixedExp[i] === '-' && operators.includes(fixedExp[i - 1]);
      const isNegativeAndIsTheFirstNumber = fixedExp[i] === '-' && fixedExp.indexOf('-') === 0;

      if (isNegativeAndAnOperatorFollows || isNegativeAndIsTheFirstNumber) {
        const negativeNumber = `${fixedExp[i]}${fixedExp[i + 1]}`;

        fixedExp.splice(i, 2, negativeNumber);
      }
    }

    return fixedExp;
  }

  /**
  * percentNumbers: Transform percent numbers in valid value
  * @param  {Array} expression Expression in array type
  * @return {Array}            Expression in array type fixed
  */
  function percentNumbers(expression) {
    const fixedExp = expression.slice();

    for (let i = 0; i < fixedExp.length; i += 1) {
      if (fixedExp[i].includes('%')) {
        const number = fixedExp[i].slice(0, fixedExp[i].length - 1);

        fixedExp.splice(i, 1, (number / 100).toString());
      }
    }
    return fixedExp;
  }

  /**
    * miniExpression: Extract a mini expression(only one operator) of expression
    * @param  {Array} expression Expression in array type fixed
    * @return {Array}            Expression with one mini expression to be solved
    */
  function miniExpression(expression) {
    const expWithMiniExp = expression.slice();
    let miniExp = [];
    let keepGoing = true;
    let count = 0;

    do {
      if (expWithMiniExp.includes(operators[count])) {
        let start;
        let i = (expWithMiniExp.indexOf(operators[count]) - 1);
        let end;
        let j = (expWithMiniExp.indexOf(operators[count]) + 1);

        // While don't find another operator let i will be decreased.
        while (typeof start === 'undefined') {
          if (i <= 0) {
            start = 0;
          }
          if (operators.includes(expWithMiniExp[i])) {
            start = i + 1;
          }
          i -= 1;
        }

        // While don't find another operator let j will be increased.
        while (typeof end === 'undefined') {
          if (operators.includes(expWithMiniExp[j]) || j === expWithMiniExp.length) {
            end = j - 1;
          }
          j += 1;
        }

        miniExp = expWithMiniExp.slice(start, end + 1);
        expWithMiniExp.splice(start, miniExp.length, miniExp);

        if (typeof miniExp !== 'undefined') {
          keepGoing = false;
        }
      }
      if (count >= operators.length - 1) {
        keepGoing = false;
      } else {
        count += 1;
      }
    } while (keepGoing);
    return expWithMiniExp;
  }

  /**
    * solve: Solves one mini expression
    * @param  {Array} expression Expression with one mini expression
    * @return {Array}            Expression with the result of a mini expression
    */
  function solves(expression) {
    const expressionSolved = expression.slice();

    function calc(x, y, operator) {
      const operations = [
        {
          operator: '*',
          action: x * y,
        },
        {
          operator: '/',
          action: x / y,
        },
        {
          operator: '+',
          action: +x + +y,
        },
        {
          operator: '-',
          action: x - y,
        },
      ];

      function action(operatorToSolve) {
        const result = operations.filter((e) => e.operator === operatorToSolve);
        return result[0].action.toString();
      }

      return action(operator);
    }

    expressionSolved.forEach((mini) => {
      // The mini expression will be the only item in the array in object type
      if (typeof mini === 'object') {
        const [x, op, y] = mini;

        expressionSolved.splice(expressionSolved.indexOf(mini), 1, calc(x, y, op));
      }
    });

    return expressionSolved;
  }

  // Begin the solving process and start a loop to create a mini expression, solve it,
  // update the expression and repeat the process until has only the result to return
  const myExpression = split(input);
  let expressionFixed = negativeNumbers(myExpression);
  expressionFixed = percentNumbers(expressionFixed);
  let expressionWithMiniExp;
  let result;

  let keepGoing = true;
  while (keepGoing) {
    expressionWithMiniExp = miniExpression(expressionFixed);
    result = solves(expressionWithMiniExp);
    expressionFixed = result;

    if (result.length <= 1) {
      keepGoing = false;
    }
  }

  return result[0];
}

export default doCalculations;
