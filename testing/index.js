module.exports = (n1, n2, op) => {
  switch (op) {
    case 'add':
      return n1 + n2;
    case 'subtract':
      return n1 - n2;
    case 'times':
      return n1 * n2;
    case 'divide':
      return +(n1 / n2).toFixed(3);
    default: return undefined;
  }
};
