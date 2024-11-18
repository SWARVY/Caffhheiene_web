import { atom } from 'jotai'

export type Scroll = 'neutral' | 'up' | 'down'

export const scrollAtom = atom('neutral')
