<template>
    <ul v-for="resource in learningResources" :key="resource.id"></ul>
</template>

<script>
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
    }
}
</script>