import {create} from "zustand";


interface SelectedPark extends google.maps.GeocoderResult {
    parkName: string;
}
interface AddedParksStore {
    selectedPark: SelectedPark | null;
    setSelectedPark: (park: SelectedPark) => void;
}


export const useSelectedParkStore = create<AddedParksStore>((set, get) => ({
    selectedPark: null,
    setSelectedPark: (park) => set({ selectedPark: park }),
}));