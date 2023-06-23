import { create } from "zustand";

interface GlobalNavigationStore {
    isNavOpen: boolean;
    toggleNav: () => void;
}

export const useGlobalNavigationStore = create<GlobalNavigationStore>((set) => ({
    isNavOpen: false,
    toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));