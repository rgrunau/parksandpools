import { LatLngLiteral } from "@/components/map-components/Map";
import { create } from "zustand";

interface ParkLocationStore {
    parkLocation: LatLngLiteral | null;
    setParkLocation: (location: LatLngLiteral) => void;
}

export const useParkLocationStore = create<ParkLocationStore>((set) => ({
    parkLocation: null,
    setParkLocation: (location) => set({ parkLocation: location }),
}));