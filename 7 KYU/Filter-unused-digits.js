function unusedDigits(...args) {
  let usedDigits = args.join('');
  return '0123456789'.replace(new RegExp(`[${usedDigits}]`, 'g'), '');
}