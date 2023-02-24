<script src="./SearchResults.ts" lang="ts"></script>
<template>
    <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
        <h5>Cargando...</h5>
        <span> Espere por Favor</span>
    </div>

    <ul v-else-if="places.length > 0" class="list-group mt-3">
        <li v-for="place in places" :key="place.id" class="list-group-item list-group-item-action">
            <h5>{{ place.text }}</h5>
            <p>{{ place.place_name }}</p>
            <div aling="right">
                <button class="btn btn-outline-primary btn-sm">Direcciones</button>
            </div>
        </li>
    </ul>
</template>

<style scoped>
li {
    cursor: pointer;
}

h5 {
    font-size: 15px !important;
    font-weight: bold;
}

p {
    font-size: 13px !important;
}
</style>