import { capitalizeFirstLetter } from './format'

// Type
export const TYPES = ['primary', 'secondary', 'outline'] as const
export type Type = (typeof TYPES)[number];

// Project Abbreviation
export const PROJECT_ABB = 'nv'

export const PROJECT_ABB_UPP = capitalizeFirstLetter(PROJECT_ABB)
