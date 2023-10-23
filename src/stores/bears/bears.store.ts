import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware';

interface Bear {
  id: number;
  name: string;
}


interface BearState {
  //declarations
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  bears: Bear[];

  //computed

  totalBears: () => number;
  //actions
  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
  addBear: () => void;
  clearBear: () => void;
}

const bearsAPI: StateCreator<BearState> = (set, get) => ({
  blackBears: 10,
  pandaBears: 5,
  polarBears: 1,
  bears: [{
    id: 1, name: 'oso #1'
  }],

  totalBears: () => {
    return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
  },
  
  increaseBlackBears: (by) => set((state) => ({ blackBears: Math.max(0, state.blackBears + by) })),
  increasePolarBears: (by) => set((state) => ({ polarBears: Math.max(0, state.polarBears + by) })),
  increasePandaBears: (by) => set((state) => ({ pandaBears: Math.max(0, state.pandaBears + by) })),
  addBear: () => set((state) => ({
    bears:
      [...state.bears, { id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}` }]
  })),
  clearBear: () => set(({ bears: [] }))
})


export const useBearStore = create<BearState>()(
  persist(bearsAPI,
    {
      name: 'person-storage',
    }
  )
)