import { useStore } from 'vuex';
import { computed } from 'vue';
import { StateInterface } from '@/store';
import Mapboxgl from 'mapbox-gl';

export const useMapStore = () => {

    const store = useStore<StateInterface>()
    

    return {
        map: computed(()=> store.state.map.map),
        distance: computed(()=> store.state.map.distance),
        duration: computed(()=> store.state.map.duration),
         
        //MUTATIONS
        setMap:(map: Mapboxgl.Map) => store.commit('map/setMap', map),

        //ACTIONS


    }
}
