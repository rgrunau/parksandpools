import { create } from 'zustand';

//write interface for store
interface ToggleNavStore {
    isNavOpen: boolean;
    toggleNav: () => void;
}

export const useGlobalNavigationStore = create<ToggleNavStore>((set) => ({
    isNavOpen: false,
    toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));