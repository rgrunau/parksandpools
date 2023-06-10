import { create } from "zustand";


interface MapStore {
    map: google.maps.Map | null;
    setMap: (map: google.maps.Map) => void
}

export const useMapStore = create<MapStore>((set, get) => ({ 
    map: null,
    setMap: (map) => set({ map }),
}));