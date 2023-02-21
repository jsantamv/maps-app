<script src="./MapView.ts" lang="ts"></script>

<template>
    <div v-if="!isUserlocationReady" class="loading-map d-flex  justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere por Favor <span>Localizando...</span></h3>
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>

    <div v-show="isUserlocationReady" class="map-container" ref="mapElement">

    </div>

</template>

<style scoped>
@import './MapView.css';
</style>