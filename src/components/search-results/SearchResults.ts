import { defineComponent, ref } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';
import { Feature } from '@/interfaces/places';

export default defineComponent({
    name: 'SearchResults',

    setup() {

        const { isLoadingPlaces, places } = usePlacesStore()
        const { map } = useMapStore()
        const activePlace = ref('')

        return {
            isLoadingPlaces,
            places,
            activePlace,

            onPlacedClicked: (place: Feature) => {
                activePlace.value = place.id
                const [lng, lat] = place.center
                map.value?.flyTo({
                    zoom: 14,
                    center: [lng, lat]
                })
            }
        }
    }
})
