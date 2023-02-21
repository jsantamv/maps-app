import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import Mapboxgl from 'mapbox-gl';

export default defineComponent({

    name: 'MapView',

    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserlocationReady } = usePlacesStore();

        

        const initMap = async () => {

            //el elemento contendor del mapa debe existir. 
            if (!mapElement.value) throw new Error('Div element no exists')
            if (!userLocation.value) throw new Error('user location no exists')

            await Promise.resolve();

            new Mapboxgl.Map({
                container: mapElement.value,  //'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, //[-74.5, 40], // starting position [lng, lat]
                zoom: 15 // starting zoom
            });

            const myLocationMarker = new Mapboxgl.Marker()
        }

        
        onMounted(() => {
            if (isUserlocationReady.value)
                return initMap();
        });

        watch(isUserlocationReady, (newVal) => {
            if (isUserlocationReady.value) initMap();
        })

        return {
            isUserlocationReady,
            mapElement
        }
    }

})