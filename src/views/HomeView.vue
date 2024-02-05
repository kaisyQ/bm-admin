<template>

    <div>

        home 

        <comments />

    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Comments from './../components/Comments/Comments.vue'
    export default defineComponent({
        name: 'HomeView',
        components: {
            Comments
        }
    });
</script>