import { Feature } from '@/interfaces/places';
export interface PlacesState {
    isLoading: boolean;
    userLocations?: [number, number]; // lng, lat
    isLoadingPlaces: boolean,
    places: Feature[];
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocations: undefined,
        isLoadingPlaces: false,
        places: []
    }
}

export default state;