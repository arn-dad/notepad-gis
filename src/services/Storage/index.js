class Storage {
  static get(key) {
    try {
      const rawData = localStorage.getItem(key)
      return JSON.parse(rawData)
    } catch (error) {
      console.warn('Error Storage: ', error)
    }
  }

  static set(key, data) {
    try {
      const stringified = JSON.stringify(data)
      localStorage.setItem(key, stringified)
    } catch (error) {
      console.warn('Error Storage: ', error)
    }
  }

  static clear() {
    localStorage.clear()
  }
}

export default Storage;