import {create} from "zustand";


export interface SelectedPark extends google.maps.GeocoderResult {
    name: string;

}
interface AddedParksStore {
    selectedPark: SelectedPark | null;
    setSelectedPark: (park: SelectedPark) => void;
}


export const useSelectedParkStore = create<AddedParksStore>((set, get) => ({
    selectedPark: null,
    setSelectedPark: (park) => set({ selectedPark: park }),
}));