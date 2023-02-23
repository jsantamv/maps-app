import { GetterTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<MapState, StateInterface> = {
    isMapReady( state ) {
        // si tiene un valor 
        return !!state.map
    }
}



export default getters;