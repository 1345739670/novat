const camelizeRE = /-(\w)/g

// my-name -> myName
export const camelize = (str: string): string =>
  str.replace(camelizeRE, (_, c) => c.toUpperCase())

export const capitalizeFirstLetter = (inputString: string): string => {
  if (inputString.length === 0) {
    return inputString
  }
  return inputString.charAt(0).toUpperCase() + inputString.slice(1)
}
