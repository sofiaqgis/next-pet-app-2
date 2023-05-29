import { useState } from 'react'

export function useLocalStorage <T>(key: string, initialValue: T): [T, (value: T) => void] {
// en este useState se nombran los estados de modo distinto
  const [storedValue, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item != null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
