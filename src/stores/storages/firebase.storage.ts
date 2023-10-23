import { StateStorage, createJSONStorage } from "zustand/middleware"

const firebaseURL = 'https://zustand-store-default-rtdb.firebaseio.com/users'

const firebaseAPI: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${firebaseURL}/${name}.json`)
      const jsonData = await data.json()
      return JSON.stringify(jsonData)
    } catch (error) {
      console.log(error)
      return null
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    await fetch(`${firebaseURL}/${name}.json`, {
      method: 'PUT',
      body: value
    })
    return
  },
  removeItem: function (name: string): void | Promise<void> {
    sessionStorage.removeItem(name)
  }
}

export const firebaseStorage = createJSONStorage(() => firebaseAPI)