export function getLocalStorage(name: string, defaultValue: any = null) {
  if (typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name)
    return ls
  }

  return defaultValue
}