import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeState = (typeof Theme)[keyof typeof Theme]
export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
  AUTO = 'auto',
}
export interface ThemeStoreState {
  theme: ThemeState
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set, get) => ({
      theme: Theme.LIGHT,
      setTheme(theme) {
        set({ theme })
      },
    }),
    {
      name: 'theme',
    }
  )
)
