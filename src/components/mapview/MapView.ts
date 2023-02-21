import { defineComponent, ref, onMounted } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({

    name: 'MapView',

    setup() {

        const mapElement = ref<HTMLDivElement>()

        const { isUserLocationReady } = usePlacesStore()

        onMounted(()=> {
            console.log(mapElement.value);
            
        })

        return {            
            isUserLocationReady,
            mapElement
        }
    }

})