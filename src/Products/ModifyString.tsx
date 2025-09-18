export const ModifyString = (stringVal: string | undefined, stringCase: 'upper' | 'lower' | undefined, splitSign: string = '_'): string => {
  if (!stringVal) return '';

  let splittedString = stringVal.split(splitSign);
  let modifiedString = '';

  splittedString.forEach((elem) => {
    modifiedString += elem.charAt(0).toUpperCase() + elem.slice(1) + ' ';
  });

  if (stringCase === 'upper') {
    return modifiedString ? modifiedString.toUpperCase() : stringVal.toUpperCase();
  } else if (stringCase === 'lower') {
    return modifiedString ? modifiedString.toLowerCase() : stringVal.toLowerCase();
  }
  return modifiedString.trim();
};
