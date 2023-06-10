import {create} from "zustand";

interface AddedParksStore {
    selectedPark: google.maps.GeocoderResult | null;
    setSelectedPark: (park: google.maps.GeocoderResult) => void;
}


export const useSelectedParkStore = create<AddedParksStore>((set, get) => ({
    selectedPark: null,
    setSelectedPark: (park) => set({ selectedPark: park }),
}));