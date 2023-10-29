import { PROJECT_ABB_UPP } from './constant'
import { capitalizeFirstLetter } from './format'

// 之后考虑下要不要专门建一个 name.ts 专门放这个命名相关的方法
export const getComponentName = (baseName: string) => {
  return `${PROJECT_ABB_UPP}${capitalizeFirstLetter(baseName)}`
}
