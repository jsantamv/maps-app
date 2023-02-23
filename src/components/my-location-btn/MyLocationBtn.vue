<template>
    <button class="btn btn-primary" @click="onMyLocationClicked">
        Ir a mi ubicacion
    </button>
</template>

<script>
import { useMapStore, usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MyLocationBtn',
    setup() {

        const { userLocation, isUserlocationReady } = usePlacesStore();
        const { map } = useMapStore();

        return {

            onMyLocationClicked: () => {
                console.log(userLocation.value);
                map.value?.flyTo({
                    center: [userLocation.value],
                    zoom: 14
                })
            }

        }
    }
})
</script>

<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>