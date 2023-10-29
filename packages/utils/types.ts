export function isNil (value: any): boolean {
  return value === null || value === undefined
}

const opt = Object.prototype.toString

export const isObject = (val: unknown): val is object => {
  return val !== null && typeof val === 'object'
}

export const isArray = (obj: any): obj is any[] => {
  return opt.call(obj) === '[object Array]'
}

export const isString = (val: unknown): val is string => {
  return typeof val === 'string'
}
