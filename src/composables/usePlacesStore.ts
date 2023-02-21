import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { StateInterface } from '@/store/index';

export const usePlacesStore = () => {

    const store = useStore<StateInterface>()

    onMounted(() => {
        if (!store.getters['places/isUserlocationReady']) {
            store.dispatch('places/getInitialLocation')
        }
    })


    return {
        //State
        isLoading: computed(() => store.state.places.isLoading),
        userLocation: computed(() => store.state.places.userLocations),

        //Getters
        isUserlocationReady: computed<boolean>(()=> store.getters['places/isUserlocationReady'])

        //action

        //mutations
    }
}
