

<template>

    <div class="app-wrapper">
    
        <main-header />
        
        <main class="content">
        
            <router-view />
        
        </main>

        <main-footer />

    </div>

</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import MainHeader from './components/Header/MainHeader.vue';
import MainFooter from './components/Footer/MainFooter.vue';
export default defineComponent({
    name: "App",
    components: {
        MainHeader,
        MainFooter,
        RouterView
    }
});
</script>


<style lang="scss" scoped>
    .app-wrapper {
        min-height: 100svh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }
    .content {
        max-width: 1200px;
        width: 100%;
        padding: 0 30px;
        flex-grow: 1;
    }   

</style>

<style>
</style>
