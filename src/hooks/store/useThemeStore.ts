import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ThemeState {
  theme: 'dark' | 'light'
  toggle: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      toggle() {
        if (get().theme === 'dark') {
          set({ theme: 'light' })
        } else {
          set({ theme: 'dark' })
        }
      },
    }),
    {
      name: 'theme',
    }
  )
)
