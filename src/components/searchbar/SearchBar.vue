<script src="./SearchBar.ts" lang="ts"></script>

<template>
    <div class="searchbar-container">
        <input class="form-control" type="text" placeholder="Buscar Lugares...">
    </div>
</template>

<style scoped>
.searchbar-container {
    border-radius: 2px 0 0 2px;
    border: 1px solid transparent;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    height: 32px;
    width: 50%;
    margin-top: 16px;
    margin-left: 16px;
    outline: none;
    position: fixed;
}
</style>