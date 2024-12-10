import { useState, useEffect } from 'react'

export function useMediaQuery(query: string, defaultValue: boolean = false): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return defaultValue // Nilai default untuk SSR
    }
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    const handleChange = () => {
      setMatches(matchMedia.matches)
    }

    // Menambahkan listener untuk perubahan
    matchMedia.addEventListener('change', handleChange)

    // Cleanup listener
    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}
