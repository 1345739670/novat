import { PROJECT_ABB } from './constant'
import { isObject, isArray, isString } from './types'

type BEMElement = string;
type BEMModifier =
  | (string | undefined)[]
  | Record<string, boolean | string | undefined>;

const createModifier = (prefixClass: string, modifierObject?: BEMModifier) => {
  let modifiers: string[] = []
  if (isArray(modifierObject)) {
    modifiers = modifierObject.map((modifier) => {
      return `${prefixClass}--${modifier}`
    })
  } else if (isObject(modifierObject)) {
    modifiers = Object.entries(modifierObject).map(([modifier, value]) => {
      if (!value) return ''
      return `${prefixClass}--${modifier}`
    })
  }
  return [prefixClass, ...modifiers].join(' ')
}

/**
 * CSS BEM
 * @example
 * const bem = createCssScope('button')
 * bem() // button
 * bem('label') // button__label
 * bem({ disabled }) // button button--disabled
 * bem('label', { disabled }) // button__label button__label--disabled
 * bem(['disabled', 'primary']) // button button--disabled button--primary
 */

export const createCssScope = (prefix: string, identity = PROJECT_ABB) => {
  const prefixClass = `${identity}-${prefix.replace(identity, '')}`

  return (
    elementOrModifier?: BEMElement | BEMModifier,
    modifier?: BEMModifier
  ) => {
    if (!elementOrModifier) return prefixClass
    if (isString(elementOrModifier)) {
      const element = `${prefixClass}__${elementOrModifier}`
      if (!modifier) return element
      return createModifier(element, modifier)
    }
    return createModifier(prefixClass, elementOrModifier)
  }
}
