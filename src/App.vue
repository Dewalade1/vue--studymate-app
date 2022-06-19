<template>
    <ul>
        <learning-resource  
            v-for="resource in learningResources" 
            :resource="resource"
            :key="resource.id"
        ></learning-resource>
    </ul>
</template>

<script>
    import LearningResource from "./components/resources/LearningResource/LearningResource.vue";

    export default {
        data() {
            return {
                learningResources: [
                    {
                        id: "official-guide",
                        title: "Official Guide",
                        description: "The official Vue.js learning guide",
                        link: "https://veujs.org"
                    },
                    {
                        id: "google",
                        title: "Google",
                        description: "Search engine for finding more learning resources on the web",
                        link: "https://google.org"
                    }
                ]
            }
        },
        components: { LearningResource }
    }
</script>