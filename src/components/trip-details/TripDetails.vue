<template>
    <div class="trip-container column">
        <div class="col">
            Distancia: <strong>1283</strong>
        </div>

        <div class="col">
            Duracion: <strong>1283</strong>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TripDetails',
    setup() {


        return {


        }
    }
})

</script>

<style scoped>
.trip-container {
    background-color: white;
    border-radius: 10px;
    bottom: 100px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 30px;
    left: 10px;
    padding: 10px;
    position: fixed;
    width: 350px;
}
</style>>
