import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { PlacesResponses, Feature } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    // someAction( { commit }, payload   ) {
    //     // a line to prevent linter errors
    // }

    getInitialLocation({ commit }) {
        // TODO: COLOCAR LOADING

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            (err) => {
                console.error(err);
                throw new Error('No Gelocations :( ');
            }
        )
    },

    //TODO: Colocar el valor de retorno
    async searchPlacesByTerm({ commit, state }, query): Promise<Feature[]> {

        if (query.length === 0) {
            commit('setPlaces', [])
            return []
        }

        if (!state.userLocations) throw new Error('No hay ubicacion del usuario')

        const resp = await searchApi.get<PlacesResponses>(`/${query}.json`, {
            params: {
                proximity: state.userLocations?.join(',')
            }
        })

        commit('setPlaces', resp.data.features)

        return resp.data.features;
    }
}



export default actions;