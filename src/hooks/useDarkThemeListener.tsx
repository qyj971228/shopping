import { useEffect, useState } from 'react'

function useDarkThemeListener() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches)
    }

    mediaQueryList.addEventListener('change', handleChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [])

  return isDarkMode
}

export default useDarkThemeListener
