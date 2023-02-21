export interface PlacesState {
    isLoading: boolean;
    userLocations?: [number, number] // lng, lat
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocations: undefined
    }
}

export default state;