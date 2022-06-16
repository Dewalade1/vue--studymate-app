<template>
    <ul>
        <learning-resource  
            v-for="resource in resources" 
            :resource="resource"
            :key="resource.id"
        ></learning-resource>
    </ul>
</template>

<script>
    import LearningResource from "../LearningResource/LearningResource.vue";

    export default {
        components: { LearningResource },
        props: {
            resources: {
                type: Array,
                required: true,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin: auto;
        max-width: 40rem;
    }
</style>