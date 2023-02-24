import { MutationTree } from 'vuex';
import { PlacesState } from './state';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<PlacesState> = {
    // someMutation( /* state: ExampleStateInterface */) {
    //     // a line to prevent linter errors
    // }

    setLngLat(state: PlacesState, { lng, lat }: { lng: number, lat: number }) {
        state.userLocations = [lng, lat];
        state.isLoading = false;
    },

    setIsLoadingPlaces(state) {
        state.isLoadingPlaces = true;
    },

    setPlaces(state, places: Feature[]) {
        state.places = places
        state.isLoadingPlaces = false
    }

}


export default mutation;