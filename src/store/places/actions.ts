import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


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
    async searchPlacesByTerm({commit,state }, query){
        console.log('VUEX', query);
        


    }
}



export default actions;