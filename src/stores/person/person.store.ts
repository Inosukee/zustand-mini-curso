import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware"
import { firebaseStorage } from "../storages/firebase.storage";

interface PersonState {
  //declare state
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  getFullName: () => string;
}

type StoreState = PersonState & Actions;

const storeAPI: StateCreator<StoreState> = (set, get) => ({
  firstName: '',
  lastName: '',
  getFullName: () => {
    return `${get().firstName} ${get().lastName}`
  },
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
})



export const usePersonStore = create<StoreState>()(
  persist(storeAPI,
    {
      name: 'person-storage',
      // storage: customSessionStorage,
      storage: firebaseStorage,
    }
  )
)